import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginCustomerComponent } from "./login-customer/login-customer.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { CustomersComponent } from "./customers/customers.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "login",
    component: LoginCustomerComponent
  },
  {
    path: "inventory",
    component: InventoryComponent
  },
  {
    path: "new_product",
    component: NewProductComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "create-account",
    component: CreateAccountComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
