import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DessertUserService {

  constructor( private http: HttpClient) { }
  private url ='http://127.0.0.1:5001/dessert/';




  Ajouter(author: any){
    return  this.http.post(this.url + 'ajoute' , author);
  }
  
  getAllMenu(){
    return  this.http.get(this.url + 'all' );
  }
  }
