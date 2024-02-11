import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
//import { Subject } from 'rxjs';
import{map, sample} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DessertService {
  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);
  public cartItemList1:any=[]
public   productList1=new BehaviorSubject<any>([]);



  constructor( private http: HttpClient) {

  }

  private url8 ='http://127.0.0.1:5001/api/adminresto/nb_resto';
  private url4 ='http://127.0.0.1:5001/api/users/nb_users';


  /////////////////////////


  private url ='http://127.0.0.1:5001/dessert/';
  private url1 ='http://127.0.0.1:5001/Entree/';
  private url2 ='http://127.0.0.1:5001/suite/';
  private url3 ='http://127.0.0.1:5001/panier/';

  private url5 ='http://127.0.0.1:5001/contact/';
 
  private url81 ='http://127.0.0.1:5001/api/adminresto/';
  private url6 ='http://127.0.0.1:5001/search/';
  private apiUrl = 'http://localhost:5001/panier/api/panier';
  private url9 ='http://127.0.0.1:5001/avis/';


// dashbord admin 

//get nb admin resto
getRestoCount(): Observable<any> {
  const url = `${this.url8}`;
  return this.http.get(url);
}

//getClientCount
  getClientCount(): Observable<any> {
    const url = `${this.url4}`;
    return this.http.get(url);
  }
////////////////////




// get nb dessert
getnombrededessert(id: any): Observable<any> {

  return this.http.get(environment.url +'/api/adminresto/nbDessert/'+id);
}

// get nb suite
getnombredesuite(id: any): Observable<any> {

  return this.http.get(environment.url +'/api/adminresto/nbsuite/'+id);
}
// get nbEntree
getnombredeentree(id: any): Observable<any> {

  return this.http.get(environment.url +'/api/adminresto/nbEntree/'+id);
}
// get nb commande
getnombredecommande(id: any): Observable<any> {

  return this.http.get(environment.url +'/api/commande/nb/'+id);
}





//supprimer avis
deleteavis(id:any){
  return this.http.delete(this.url9 + 'supprimeravis/'+id);

 }

//ajout dessert

  Ajouter(author: any){
    return  this.http.post(this.url + 'ajoute' , author);
  }
  //Ajouterpanier
  Ajouter1(author: any){
    return  this.http.post(this.url3 + 'ajoute' , author);
  }

  //ajouter avis client
  ajoutevotreavis(author: any){
    return  this.http.post(this.url9 + 'ajoutevotreavis' , author);
  }

  getAllMenu(){
    return  this.http.get(this.url + 'all' );
  }
  getAllMenu2(){
    return  this.http.get(this.url2 + 'all' );
  }


  getAllMenu1(){
    return  this.http.get(this.url1 + 'all' );
  }
  getAllMenu3(){
    return  this.http.get(this.url4 + 'clients' );
  }
  demandeAjouterResto(author: any){
    return  this.http.post(environment.url + '/api/contact' , author);
  }

  Ajouterpanier(author: any){
    return  this.http.post(this.url3 + 'ajoute' , author);
  }
//avis client a la admin resto
  getAllavis(){
    return  this.http.get(this.url9 + 'allavis' );
  }
//contact:
getcontact(){
  return  this.http.get(environment.url + '/api/contact' ) as Observable<any>;
}

// sup contact
deleteUser(id:any){
  return this.http.delete(environment.url + '/api/contact/'+id);

 }

 // sup dessert
deleteDessert(id:any){
  return this.http.delete(this.url + 'supprimer/'+id);

 }
//cart
getProduct(){
  return this.http.get<any>("https://fakestoreapi.com/products")
  .pipe(map((res:any)=>{
    return res;
  }))

}

getProducts(){
  return this.productList.asObservable();
}

setProduct(product:any){
 this.cartItemList.push(...product);
 this.productList.next(product)
}


addtoCart(product:any){
 this.cartItemList.push(product);
 this.productList.next(this.cartItemList);
this.getTotalPrice();
console.log(this.cartItemList)
}




getTotalPrice(){
 let grandtotal=0;
 this.cartItemList.map((a:any)=>{

   grandtotal +=a.price
 }
 )
 return grandtotal;
}


removeCartItem(product:any){
  this.cartItemList.filter((a:any,index:any)=>{
  if(product.id===a.id)
  this.cartItemList.splice(index,1)
  })
  this.productList.next(this.cartItemList)
}
removeAllCart(){
this.cartItemList=[]
this.productList.next(this.cartItemList)
}





//favoris
getProducts1(){
  return this.productList1.asObservable();
}
getProduct1(){
  return this.http.get<any>("https://fakestoreapi.com/products")
  .pipe(map((res:any)=>{
    return res;
  }))

}

setProduct1(product:any){
  this.cartItemList1.push(...product);
  this.productList1.next(product)
 }


addtoCart1(product1:any){
  this.cartItemList1.push(product1);
  this.productList1.next(this.cartItemList1);
 this.getTotalPrice1();
 console.log(this.cartItemList1)
 }




getTotalPrice1(){
  let grandtotal1=0;
  this.cartItemList1.map((a:any)=>{

    grandtotal1 +=a.price
  }
  )
  return grandtotal1;
 }

removeCartItem1(product1:any){
  this.cartItemList1.filter((a:any,index:any)=>{
  if(product1.id===a.id)
  this.cartItemList1.splice(index,1)
  })
  this.productList1.next(this.cartItemList1)
}
// removeAllCart1(){
// this.cartItemList1=[]
// this.productList1.next(this.cartItemList1)
// }







// ajouter panier dans la base
enregistrerDonneesEnJSON(donnees: any) {

  return this.http.post(this.url3 +'ajoute', donnees);
}




// get all panier
getAllPanier(){
  return  this.http.get(this.url3 + 'all' );
}

 // sup cmd
 deletecmd(id:any){
  return this.http.delete(this.url + 'supprimer/'+id);

 }
}
