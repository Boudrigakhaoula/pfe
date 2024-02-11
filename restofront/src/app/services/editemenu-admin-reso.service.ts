import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class EditemenuAdminResoService {
  

   // decl object
   ProfilUser={
    _id:'',
    name:'',
    price:'',
    image:'',
   

  }
  // variable
  IsLoggedIn:boolean=false
  helper = new JwtHelperService ;



  constructor( private http:HttpClient) { }
    private url ='http://127.0.0.1:5001/entree/';


    

    saveDataProfil(token:any){
      let decodeToken = this.helper.decodeToken(token)
  
      localStorage.setItem('_id',decodeToken._id)
      localStorage.setItem('name',decodeToken.name)
      localStorage.setItem('price',decodeToken.price)
      // localStorage.setItem('image',decodeToken.image)
      console.log(decodeToken)
    }




// mise a jour

updateUser(id:string,newprofile:any){
  return this.http.put(this.url + 'update/' +id,newprofile)
}






}




