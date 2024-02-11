import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AdminRestoService {


  constructor( private http:HttpClient) { }

  login_admin_resto(AdminResto: any){
    return  this.http.post(environment.url + '/api/auth/adminresto/login' , AdminResto) as Observable<any>;
  }

  getAdminRestoById(id: any){
    return  this.http.get(environment.url + '/api/adminresto/' + id) as Observable<any>;
  }

  UpdateAdminRest(AdminResto: any){
    return  this.http.put(environment.url + '/api/adminresto/' + AdminResto._id, {email : AdminResto.email, name : AdminResto.name, address :  AdminResto.address, phone :  AdminResto.phone, ville : AdminResto.ville, urlFacebook : AdminResto.urlFacebook, urlInstagram : AdminResto.urlInstagram, UrlImage : AdminResto.UrlImage, Menu :  AdminResto.Menu,Avis : AdminResto.Avis, Commandes :  AdminResto.Commandes});
  }

  getall_adminresto(){
    return  this.http.get(environment.url + '/api/adminresto') as Observable<any>;
  }

// get by id commade

getall_commande(id:any){
  return  this.http.get(environment.url + '/api/commande/nb/' + id) as Observable<any>;
}
UpdateProfilAdminRest(AdminResto: any){
  return  this.http.put(environment.url + '/api/adminresto/newprofil/' + AdminResto._id, { name : AdminResto.name, address :  AdminResto.address, phone :  AdminResto.phone, ville : AdminResto.ville, urlFacebook : AdminResto.urlFacebook, urlInstagram : AdminResto.urlInstagram, UrlImage : AdminResto.UrlImage  });
}

}
