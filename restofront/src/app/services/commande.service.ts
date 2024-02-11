import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  AddCommande(commande:any){
    return this.http.post(environment.url + "/api/commande", commande) as Observable<any>;
  };

  getAllCommandes(){
    return this.http.get(environment.url + "/api/commande") as Observable<any>;
  };

  getCommandeById(id:any){
    return this.http.get(environment.url + "/api/commande/" + id) as Observable<any>;
  };
  deletecommande(id:any){
    return this.http.delete(environment.url + "/api/commande/" + id) as Observable<any>;
  };
}
