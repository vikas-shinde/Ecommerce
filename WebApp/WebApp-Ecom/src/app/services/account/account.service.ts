import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http: HttpClient) { }

  public get<T>(username:string,password:string): Observable<string> {
    return this.http.get<string>("https://localhost:44373/api/Account/login?UserName="+username+"&Password="+password);
  }
}
