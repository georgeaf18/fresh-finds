import { Component, OnInit } from "@angular/core";
import { APIService } from "../services/api.service";
import { Product } from "../interfaces/product-interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditComponent } from "../edit/edit.component";
import { ConfirmationComponent } from "../confirmation/confirmation.component";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  inventory: Product[];

  constructor(private api: APIService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getInventory();
  }

  getInventory = () => {
    console.log("running...");

    this.api.getProducts().subscribe(res => {
      console.log("res ", res);
      this.inventory = res;
    });
  };

  openCreateNewProduct = () => {
    // const modalRef = this.modalService.open(NewProductComponent, {
    //   centered: true,
    //   size: "lg",
    //   keyboard: false
    // });

    location.replace("http://localhost:4200/new_product");
  };

  openEdit = product => {
    const modalRef = this.modalService.open(EditComponent, {
      centered: true,
      size: "xl",
      keyboard: false
    });

    modalRef.componentInstance.product = product;
  };

  hideProduct = product => {
    const modalRef = this.modalService.open(ConfirmationComponent, {
      centered: true,
      size: "md",
      keyboard: false
    });

    modalRef.componentInstance.product = product;
  };
}
