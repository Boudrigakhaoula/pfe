import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from 'src/app/services/dessert.service';
import Swal from "sweetalert2";
import {AdminRestoService} from "../../../services/admin-resto.service";
import {CommandeService} from "../../../services/commande.service";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  dataArray1: any;

  donnees: any; // Déclaration de la variable donnees
  elements: string[] = [];
  _id: any;

  products: any = [];
  grandTotal!: number;
  prixTotal = 0;
  currentUser: any = {};

  constructor(private _auth: DessertService, private router: Router, private RestoService : AdminRestoService, private commandeService:CommandeService) {
    const user = localStorage.getItem('User');
    const cart:any = JSON.parse(localStorage.getItem('cart') || '[]');

    cart.map((data: any) => {
      data.items.map((item: any) => {
        this.products.push(item);
        this.grandTotal = this.grandTotal + 1;
        this.prixTotal = this.prixTotal + Number(item.price);
      });
    });

    if (user) {
      this.currentUser = JSON.parse(user);
    }

  }

  ngOnInit(): void {
  }

  SendCommande(firstName:string, lastName:string, adress:string, phone:string) {
    // check if all field filled
    if (firstName == '' || lastName == '' || adress == '' || phone == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir tous les champs!',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      let currentPrix : number = 0;
      let currentProducts :any = [];

      const cart:any = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.map(async (data: any) => {
        data.items.map((item: any) => {
          currentProducts.push(item);
          currentPrix = currentPrix + Number(item.price);
        });
          let user = {
            id: this.currentUser._id,
            firstName : firstName,
            lastName : lastName,
            adress : adress,
            phone : phone,
          };
          let resto = data.restoid;
          let Items = currentProducts;
          let TotalPrice = currentPrix;
          let Adresse = adress;

          let Commande = {
            User : user,
            Resto : resto,
            Items : Items,
            TotalPrice : TotalPrice,
            Adress : Adresse,
          };

          this.commandeService.AddCommande(Commande).subscribe((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Commande envoyée avec succès!',
              showConfirmButton: false,
              timer: 1500
            });
            localStorage.removeItem('cart');
            this.router.navigate(['/liste-resto']);
          });

          currentPrix = 0;
          currentProducts = [];
      });
    }
  }
}
