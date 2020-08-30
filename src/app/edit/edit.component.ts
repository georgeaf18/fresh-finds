import { Component, OnInit, Input } from "@angular/core";
import { APIService } from "../services/api.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NewProductComponent } from "../new-product/new-product.component";
import { Product } from "../interfaces/product-interface";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  constructor(private api: APIService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log("Edit component -> product -> ", this.product);

    this.productForm = this.formBuilder.group({
      product_name: [
        this.product.product_name,
        [Validators.required, Validators.minLength(3)]
      ],
      price: [
        this.product.price,
        [Validators.required, Validators.minLength(3)]
      ],
      SKU: [this.product.SKU, [Validators.required, Validators.minLength(3)]],
      in_stock: [this.product.in_stock],
      picture: [this.product.picture],
      description: [this.product.description],
      featured: [this.product.featured],
      category: [this.product.category],
      quantity_in_stock: [this.product.quantity_in_stock, Validators.required],
      discount_available: [this.product.discount_available],
      sold_by: [this.product.sold_by],
      discount: [this.product.discount]
    });
  }

  @Input() product: Product;

  submitted = false;
  productForm: FormGroup;
  data;

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

    this.api
      .updateProduct(this.product.product_id, this.data)
      .subscribe(res => {
        console.log(res);
      });
  };
}
