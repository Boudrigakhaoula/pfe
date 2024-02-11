import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EntreeService {


  constructor( private http: HttpClient) { }
  private url ='http://127.0.0.1:5001/Entree/';




  Ajouter(AdminResto: any){
    return  this.http.put(environment.url + '/api/adminresto/' + AdminResto._id, {email : AdminResto.email, name : AdminResto.name, address :  AdminResto.address, phone :  AdminResto.phone, ville : AdminResto.ville, urlFacebook : AdminResto.urlFacebook, urlInstagram : AdminResto.urlInstagram, UrlImage : AdminResto.UrlImage, Menu :  AdminResto.Menu,Avis : AdminResto.Avis,Commandes :  AdminResto.Commandes});
  }

  getAllMenu(){
    return  this.http.get(this.url + 'all' );
  }


  // getAllMenu2(){
  //   return  this.http.get(this.url + 'getbyid/:id' );
  // }

 // sup suite
deleteDessert(id:any){
  return this.http.delete(this.url + 'supprimer/'+id);

 }

}
