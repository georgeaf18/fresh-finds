import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginCustomerComponent } from "./login-customer/login-customer.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { APIService } from "./services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { NewProductComponent } from "./new-product/new-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditComponent } from "./edit/edit.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { CustomersComponent } from './customers/customers.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginCustomerComponent,
    InventoryComponent,
    NewProductComponent,
    EditComponent,
    ConfirmationComponent,
    CustomersComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent],
  entryComponents: [NewProductComponent, EditComponent, ConfirmationComponent]
})
export class AppModule {}
