import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get(`${environment.url}/api/category`) as Observable<any>;
  }

  getCategoryById(id:any){
    return this.http.get(`${environment.url}/api/category/${id}`) as Observable<any>;
  }
}
