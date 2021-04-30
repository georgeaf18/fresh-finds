import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";

const API_URL = environment.API;
const AUTH_HEADER = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("nodeToken")}`
  }
};

@Injectable()
export class APIService {
  constructor(private http: HttpClient) { }

  private _activeUser: BehaviorSubject<any> = new BehaviorSubject<any>(
    undefined
  );
  public readonly activeUser: Observable<
    string
  > = this._activeUser.asObservable();

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

  public getProducts(): Observable<any> {
    return this.http.get(API_URL + "/products");
  }

  public addProduct(data): Observable<any> {
    return this.http.post(API_URL + "/products", data);
  }

  public updateProduct(id, data): Observable<any> {
    return this.http.put(API_URL + `/products/${id}`, data);
  }

  public deleteProduct(id): Observable<any> {
    return this.http.delete(API_URL + `/products/${id}`);
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get(API_URL + "/customers", AUTH_HEADER);
  }

  public createAccount(data): Observable<any> {
    return this.http.post(API_URL + "/customers", data);
  }

  public updateCustomer(data): Observable<any> {
    return this.http.put(API_URL + "/customers", data, AUTH_HEADER);
  }

  public getCreditCardInfo(id): Observable<any> {
    return this.http.get(API_URL + `/credit_cards/${id}`, AUTH_HEADER);
  }

  public updateCreditCard(data): Observable<any> {
    return this.http.post(API_URL + `/credit_cards`, data, AUTH_HEADER);
  }


  public login(data): Observable<any> {
    return this.http.post(API_URL + "/login/customer", data);
  }

  public setToken(value) {
    localStorage.setItem("nodeToken", value)
  }

  public setActiveUser = user => {
    this._activeUser.next(user);
    console.log("User Test", user);
  };
}
