import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { privateDecrypt } from 'crypto';
import { DessertService } from 'src/app/services/dessert.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public products:any=[]
  public grandTotal:number=0;
  public quantity=1;
  public prixTotal = 0;
  baseurl = environment.url;
  selectedFile: any  = null;
  //search
    searchTerm: string | undefined;
  searchResults: any[];

// enregister table form json

donneesJSON: any[] = [];

data: any = { name: '', price: 0, image: '' };
  dataArray3: any;

  constructor( private _auth:DessertService,private router: Router, private http:HttpClient) {
    this.searchResults = [];
  }
  ngOnInit(): void {
    const cart:any = JSON.parse(localStorage.getItem('cart') || '[]');

    cart.map((data: any) => {
      data.items.map((item: any) => {
        this.products.push(item);
        this.grandTotal = this.grandTotal + 1;
        this.prixTotal = this.prixTotal + Number(item.price);
      
      });
    });
  }


  Acheter() {

  }



  removeItem(item:any){

    const result  = this.products.filter((prod: any) => prod._id != item._id);
    this.products = result;
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.grandTotal = this.grandTotal - 1;
  }
  emptycart(){
    this._auth.removeAllCart()
  }
  inc(item:any){
  //  item.quantity=item.quantity+1
  console.log(item.quantity)

    }
    dec(item:any){
      if(item.quantity !=1){
      item.quantity=item.quantity-1
    }}
    toatl(item:any){
      item.toatl=item.toatl*item.quantity;
      return item.total
    }




// ajouter panier dans la base

    convertirEnJSON() {
      this.donneesJSON = this.products.map((item: any) => {
        return {
          name: item.name,
          price: item.price,
          image: item.image,
          prixTotal: this.prixTotal,
          quantite: 1
        };

      });
      // // Affecter la première valeur du tableau donneesJSON à data

      // if (this.donneesJSON.length > 0) {
      //   this.data = this.donneesJSON[0];
      // }
      for (let i = 0; i < this.donneesJSON.length; i++) {
        this.data = this.donneesJSON[i];
        // Faites quelque chose avec this.data, par exemple, l'enregistrer dans MongoDB
      }


      this._auth.enregistrerDonneesEnJSON(this.data).subscribe(

        (response) => {
          console.log(this.donneesJSON)
          console.log('Données enregistrées avec succès !', response);
          // console.log(this.donneesJSON)s
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement des données :', error);
        }
      );

    }
    // enregistrerBD() {
    //   const autreVariable = this.;


    // }





 //ajouter a la localStorage
  addtocart(item:any){
    // this._auth.addtoCart(item);
    const carr1 = localStorage.getItem('cart1');
    if(carr1) {
      const tempdata : any = JSON.parse(carr1) ;
      const arr = [...tempdata];
      arr.push(item);
      const datastri  = JSON.stringify(arr);
      localStorage.setItem("cart1", datastri);
    } else {
      const arr = [];
      arr.push(item);
      const datastri  = JSON.stringify(arr);
      localStorage.setItem("cart1", datastri);

    }

    Swal.fire({
      icon: 'success',
      text: "Le menu a été ajouté au panier avec succès.",
      iconColor: '#ff7300',
      confirmButtonColor: '#ff7300',
    });

    }



      }
