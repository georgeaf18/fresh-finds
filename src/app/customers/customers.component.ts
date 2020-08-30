import { Component, OnInit } from "@angular/core";
import { APIService } from "../services/api.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  customers;

  constructor(private api: APIService) {}

  ngOnInit() {
    this.api.getAllCustomers().subscribe(res => {
      this.customers = res;
      console.log(res);
    });
  }
}
