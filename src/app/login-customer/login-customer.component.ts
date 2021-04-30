import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.scss']
})
export class LoginCustomerComponent implements OnInit {

  data;
  form: FormGroup;
  submitted: boolean = false;
  hidePassword = true;

  constructor(private api: APIService, private formBuilder: FormBuilder, private router: Router) { }

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

      this.api.setToken(res.token);
      this.api.setActiveUser(res.customer);

      this.router.navigateByUrl('/customer-profile')

    })
  }

  get f() {
    return this.form.controls;
  }

  togglePassword = () => {
    this.hidePassword = !this.hidePassword
  }

}
