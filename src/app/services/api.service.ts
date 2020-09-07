import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

const API_URL = environment.API;
const AUTH_HEADER = {
  headers: {
    token: environment.token
  }
};

@Injectable()
export class APIService {
  constructor(private http: HttpClient) { }

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
    return this.http.get(API_URL + "/customers");
  }

  public createAccount(data): Observable<any> {
    return this.http.post(API_URL + "/customers", data);
  }

  public login(data): Observable<any> {
    return this.http.post(API_URL + "/login/customer", data);
  }
}
