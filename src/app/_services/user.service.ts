import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  constructor(private _http: HttpClient) { }

  userSignIn(body: any) {
    return this._http.post(`${environment.api_baseUrl}/api/auth/signin`, body);
  }
}
