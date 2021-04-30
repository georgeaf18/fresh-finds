import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  activeUser;
  card;
  edit = false
  edit_card = false
  data;
  exp_month = "01";
  exp_year = "2021"

  constructor(private api: APIService, private router: Router) { }

  ngOnInit() {
    this.api.activeUser.subscribe(user => {
      if (user === undefined) {
        this.router.navigateByUrl("/login")
      }

      this.activeUser = user
      this.getCreditCardInfo(this.activeUser.customer_id)
      console.log("CustomerProfileComponent -> ngOnInit -> this.activeUser", this.activeUser)
    })

  }

  updateCustomer = () => {
    this.data = {
      customer: this.activeUser
    }
    this.api.updateCustomer(this.data).subscribe(res => {
      console.log(res)
      if (res.status === "success") {
        this.edit = false
      }
    })
  }

  getCreditCardInfo = (id) => {
    this.api.getCreditCardInfo(id).subscribe(res => {
      console.log("CustomerProfileComponent -> getCreditCardInfo -> res", res)

      if (res.status === 404) {
        console.log("no lo encontro");
        this.card = {
          card_number: "",
          name_on_card: "",
          exp_date: "",
          zip_code: "",
          sec_code: ""
        }
      } else {
        this.card = res;
      }
    })
  }

  updateCreditCardInfo = () => {
    this.card.exp_date = `${this.exp_month}/${this.exp_year}`

    this.data = {
      card: this.card,
      customer_id: this.activeUser.customer_id
    }

    this.api.updateCreditCard(this.data).subscribe(res => {
      console.log("updateCreditCardInfo -> res", res)

    })


    console.log("card", this.card)
  }

}
