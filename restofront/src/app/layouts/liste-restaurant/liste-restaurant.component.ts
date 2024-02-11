import { Component, OnInit } from '@angular/core';
import { DessertService } from 'src/app/services/dessert.service';
@Component({
  selector: 'app-liste-restaurant',
  templateUrl: './liste-restaurant.component.html',
  styleUrls: ['./liste-restaurant.component.css']
})
export class ListeRestaurantComponent implements OnInit {
public totalItem:number=0;
public totalItem1:number=0;
  constructor(  private _auth:DessertService ) { 
    // this._auth.cartSubject.subscribe((data)=>{
    //   this.cartItem=data;
    // })
  }

  ngOnInit(): void {



//cart 

this._auth.getProducts()
.subscribe(res=>{
  this.totalItem=res.length;

})
//favori

this._auth.getProducts1()
.subscribe(res=>{
  this.totalItem1=res.length;

})








 
  
}
}
