import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from 'src/app/services/dessert.service';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-admin-resto',
  templateUrl: './admin-resto.component.html',
  styleUrls: ['./admin-resto.component.css']
})
export class AdminRestoComponent implements OnInit {
  dataArray1:any
  RestoData:any={};
  CategorysData:any=[];

  constructor(private _auth:DessertService,private router:Router, private catService: CategoryService) {
    this._auth.getAllavis().subscribe(data=>this.dataArray1=data);

    this.RestoData = JSON.parse(localStorage.getItem('AdminResto') || '{}');

    this.catService.getAllCategories().subscribe(data => {
      this.CategorysData = data;
    });

   }


   delete(id:any,i:any){
    this._auth. deleteavis(id).subscribe(response=>{
      console.log(response)

      // this.dataArray3.splice(i,1)
    });

    const result =  this.dataArray1.filter((item : any) => item._id != id);
    this.dataArray1 = result ;

  }


  logout(){
    localStorage.removeItem('AdminRestoToken');
    localStorage.removeItem('AdminResto');
    this.router.navigate(['/admin-resto/login']);
  }

  ngOnInit(): void {
  }

}
