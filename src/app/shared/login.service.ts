import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }
  GetLoginDetails(UserName, Password) {
    return this.http.get(`www.udhyogii.com/api-udyogii/login/2356789/123456789/ ${UserName}/${Password}`, null);

  }
}
