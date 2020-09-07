import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.scss']
})
export class LoginCustomerComponent implements OnInit {

  data;
  form: FormGroup;
  submitted: boolean = false;

  constructor(private api: APIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    })
  }

  login = () => {
    this.submitted = true

    if (this.form.invalid) {
      console.log("LoginCustomerComponent -> login -> this.form.invalid", this.form.invalid)
      return
    }

    this.data = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this.api.login(this.data).subscribe(res => {
      console.log("LoginCustomerComponent -> login -> res", res)
    })
  }

  get f() {
    return this.form.controls;
  }

}
