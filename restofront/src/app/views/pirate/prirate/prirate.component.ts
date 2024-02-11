import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminRestoService} from "../../../services/admin-resto.service";
import {environment} from "../../../../environments/environment";
import {CategoryService} from "../../../services/category.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prirate',
  templateUrl: './prirate.component.html',
  styleUrls: ['./prirate.component.css']
})
export class PrirateComponent implements OnInit {
  data:any = {};
  AllCategories:any = [];
  AllItems:any = [];
  catId:any;

  baseurl = environment.url;
  constructor(private router : ActivatedRoute, private AdminRestoServ: AdminRestoService, private CatServices : CategoryService) {
    this.router.paramMap.subscribe(params => {
      this.catId = params.get('id');

      this.AdminRestoServ.getAdminRestoById(this.catId).subscribe(async (data) => {
        console.log(data);
        this.data = data;
        this.AllItems = data.Menu;
      });

      this.CatServices.getAllCategories().subscribe(async (data) => {
        this.AllCategories = data;
      });
    });
  }


  ngOnInit(): void {
  }


  AddPanier(product:any) {
    let cart:any;
    let products:any;
    let status = false;

    cart = localStorage.getItem('cart');

     if (cart) {
       let data = JSON.parse(cart);
       data.map((element:any) => {
          if (element.restoid == this.catId) {
            element.items.push(product);
            status = true;
          }
       });

       if (!status) {
          let tempData = {
            restoid: this.catId,
            items: [product]
          };
          data.push(tempData);
       }
       localStorage.setItem('cart', JSON.stringify(data));
       Swal.fire({
        icon: 'success',
        text: "Le menu a été ajouté au panier avec succès.",
        iconColor: '#ff7300',
        confirmButtonColor: '#ff7300',
      });
     } else {
       let tempData = {
         restoid: this.catId,
         items: [product]
       };
       let tempArray = [];
        tempArray.push(tempData);

       localStorage.setItem('cart', JSON.stringify(tempArray));
     }
  }

  //favoris
  AddPanier1(product:any) {
    let cart:any;
    let products:any;
    let status = false;

    cart = localStorage.getItem('cart1');

     if (cart) {
       let data = JSON.parse(cart);
       data.map((element:any) => {
          if (element.restoid == this.catId) {
            element.items.push(product);
            status = true;
          }
       });

       if (!status) {
          let tempData = {
            restoid: this.catId,
            items: [product]
          };
          data.push(tempData);
       }
       localStorage.setItem('cart1', JSON.stringify(data));5
       localStorage.setItem('cart', JSON.stringify(data));
       Swal.fire({
        icon: 'success',
        text: "Le menu a été ajouté au favori avec succès.",
        iconColor: '#ff7300',
        confirmButtonColor: '#ff7300',
      });
     } else {
       let tempData = {
         restoid: this.catId,
         items: [product]
       };
       let tempArray = [];
        tempArray.push(tempData);

       localStorage.setItem('cart1', JSON.stringify(tempArray));
     }
  }

}
