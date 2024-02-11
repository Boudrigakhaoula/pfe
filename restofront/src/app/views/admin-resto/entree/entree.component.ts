import { Component, OnInit } from '@angular/core';
import { EntreeService } from 'src/app/services/entree.service';
import { Router } from '@angular/router';
import {CategoryService} from "../../../services/category.service";
import { ActivatedRoute } from '@angular/router';
import {AdminRestoService} from "../../../services/admin-resto.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit {


  currentCategory: any = {};
  dataArray1:any;

  constructor( private _auth:EntreeService,private router: Router, private CatService:CategoryService, private route: ActivatedRoute, private adminrestService: AdminRestoService) {

    this.route.paramMap.subscribe(params => {
      const catId = params.get('id');
      this.dataArray1 = [];

      // Call the necessary service method here or perform any other logic
      this.CatService.getCategoryById(catId).subscribe(async (data) => {
        console.log(data);
        this.currentCategory = data;
        let adminResto = JSON.parse(localStorage.getItem('AdminResto') || '{}');
        this.adminrestService.getAdminRestoById(adminResto._id).subscribe(async (data) => {

          await data.Menu.forEach((element: any) => {
            if (element.category == this.currentCategory.name) {
              this.dataArray1.push(element);
            }
          });

          console.log(this.dataArray1);
        });

      });



    });


  }

  ngOnInit(): void {
  }
//sup suite
  delete(id:any,i:any){
    let adminResto = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    let tempArray : any = [];

    this.adminrestService.getAdminRestoById(adminResto._id).subscribe(data => {
      data.Menu.forEach((element: any) => {
        if(element._id != id){
          tempArray.push(element);
        }
      });

      data.Menu = tempArray;

      this.adminrestService.UpdateAdminRest(data).subscribe((data:any) => {
        console.log(data);
        this.dataArray1.splice(i, 1);
        localStorage.setItem('AdminResto', JSON.stringify(data.adminResto));
        Swal.fire({
          icon: 'success',
          title: 'menu upprime avec succes',
          showConfirmButton: false,
          timer: 1500
        })
      });
    });
  }
}
