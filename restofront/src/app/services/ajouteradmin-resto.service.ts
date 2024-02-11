import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AjouteradminRestoService {
  public cartItemList2:any=[]
  public   productList2=new BehaviorSubject<any>([]);


  constructor(private http: HttpClient) { }

// ajouter admin resto
 ajouter(Resto:any){
    return  this.http.post(environment.url + '/api/adminresto' , Resto);
  }
// get admin resto
getall_adminresto() {
  return  this.http.get(environment.url + '/api/adminresto' );
 }

// supp admin resto
 deleteadmin_resto(id:any, TokenAdmin:any){
    return this.http.delete(environment.url + '/api/adminresto/' + id) as Observable<any>;
 }



//favoris
// getProducts2(){
//   return this.productList2.asObservable();
// }
// getProduct1(){
//   return this.http.get<any>("https://fakestoreapi.com/products")
//   .pipe(map((res:any)=>{
//     return res;
//   }))
//   2}




}
