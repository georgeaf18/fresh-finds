import { Component, OnInit } from "@angular/core";
import { APIService } from "../services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"]
})
export class NewProductComponent implements OnInit {
  constructor(private api: APIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      product_name: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", [Validators.required, Validators.minLength(3)]],
      SKU: ["", [Validators.required, Validators.minLength(3)]],
      in_stock: [""],
      picture: [""],
      description: [""],
      featured: [false],
      category: "viveres",
      quantity_in_stock: ["", Validators.required],
      discount_available: [false],
      sold_by: ["lb"],
      discount: [""]
    });
  }

  name;
  price;
  description;
  sold_by;
  sku;
  discount;
  pic_link;
  data;
  quantity;

  submitted = false;
  productForm: FormGroup;

  get f() {
    return this.productForm.controls;
  }

  onSubmit = () => {
    this.submitted = true;

    if (this.productForm.invalid) {
      console.log(
        "NewProductComponent -> onSubmit -> this.productForm.invalid",
        this.productForm.invalid
      );
      return;
    }

    // this.data = {
    //   product_name: "Apples",
    //   price: 1.3,
    //   SKU: 2131,
    //   in_stock: true,
    //   picture:
    //     "https://www.aldi.us/fileadmin/fm-dam/Homepage/Products/Fresh_Produce/Desktop/Fruit_-_1_desktop.jpg",
    //   description: "platanos para mangu",
    //   featured: true,
    //   category: "viveres",
    //   quantity_in_stock: 85,
    //   discount_available: false,
    //   sold_by: "lb",
    //   discount: ""
    // };

    this.data = {
      product_name: this.productForm.get("product_name").value,
      price: this.productForm.get("price").value,
      SKU: this.productForm.get("SKU").value,
      in_stock: this.productForm.get("in_stock").value,
      picture:
        "https://www.aldi.us/fileadmin/fm-dam/Homepage/Products/Fresh_Produce/Desktop/Fruit_-_1_desktop.jpg",
      description: this.productForm.get("description").value,
      featured: this.productForm.get("featured").value,
      category: "fruit",
      quantity_in_stock: this.productForm.get("quantity_in_stock").value,
      discount_available: this.productForm.get("discount_available").value,
      sold_by: this.productForm.get("sold_by").value,
      discount: this.productForm.get("discount").value
    };

    // console.log("Success -> ", JSON.stringify(this.productForm.value, null, 4));
    console.log("Success -> ", JSON.stringify(this.data, null, 4));
    // this.data = JSON.stringify(this.productForm.value);

    this.api.addProduct(this.data).subscribe(res => {
      console.log(res);
    });
  };
}
