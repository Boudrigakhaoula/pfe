import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DessertService } from 'src/app/services/dessert.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.css']
})
export class FavoriComponent implements OnInit {
 
  public product:any=[]
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
    const cart:any = JSON.parse(localStorage.getItem('cart1') || '[]');

    cart.map((data: any) => {
      data.items.map((item: any) => {
        this.product.push(item);
        this.grandTotal = this.grandTotal + 1;
        this.prixTotal = this.prixTotal + Number(item.price);
      });
    });
  }




  removeItem(item:any){

    const result  = this.product.filter((prod: any) => prod._id != item._id);
    this.product = result;
    localStorage.setItem('cart1', JSON.stringify(this.product));
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
      this.donneesJSON = this.product.map((item: any) => {
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






      }
