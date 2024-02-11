import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  login_admin(email: string, password: string){
    return  this.http.post(environment.url + '/api/auth/admin/login' , {email:email, password:password});
  }
}
