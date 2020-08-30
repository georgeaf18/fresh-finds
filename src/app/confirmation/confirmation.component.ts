import { Component, OnInit, Input } from "@angular/core";
import { APIService } from "../services/api.service";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  constructor(private api: APIService) {}

  ngOnInit() {}

  @Input() product;

  delete = () => {
    this.api.deleteProduct(this.product.product_id).subscribe(res => {
      console.log(res);
    });
  };
}
