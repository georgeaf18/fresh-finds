import { Component, OnInit } from "@angular/core";
import { APIService } from "../services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmedValidator } from "../confirmed.validator";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"]
})
export class CreateAccountComponent implements OnInit {
  constructor(private api: APIService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        fname: ["", [Validators.required, Validators.minLength(3)]],
        mname: [""],
        lname: ["", [Validators.required, Validators.minLength(3)]],
        username: ["", [Validators.required, Validators.minLength(5)]],
        password: ["", [Validators.required, Validators.minLength(4)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(4)]]
      },
      {
        validator: ConfirmedValidator("password", "confirmPassword")
      }
    );
  }

  submitted = false;
  form: FormGroup;
  data = {};
  hidePassword = true;
  hideConfirmPassword = true;

  get f() {
    return this.form.controls;
  }

  onSubmit = () => {
    this.submitted = true;

    if (this.form.invalid) {
      console.log(
        "NewProductComponent -> onSubmit -> this.productForm.invalid",
        this.form.invalid
      );
      return;
    }

    this.data = {
      fname: this.form.get("fname").value,
      mname: this.form.get("mname").value,
      lname: this.form.get("lname").value,
      username: this.form.get("username").value,
      password: this.form.get("password").value
    };

    console.log(this.data);
  };

  toggleConfirmPassword = () => {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  };

  togglePassword = () => {
    this.hidePassword = !this.hidePassword;
  };
}
