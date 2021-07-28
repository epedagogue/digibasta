import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private _http: HttpClient,
    private router: Router,
  ) { }

  userSignIn(body: any) {
    return this._http.post(`${environment.api_baseUrl}/api/auth/signin`, body);
  }
}
