  import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EditemenuAdminResoService } from 'src/app/services/editemenu-admin-reso.service';
import Swal from 'sweetalert2';
  import {CategoryService} from "../../../services/category.service";
  import {AdminRestoService} from "../../../services/admin-resto.service";
  import {UploadService} from "../../../services/upload.service";
@Component({
  selector: 'app-editemenu',
  templateUrl: './editemenu.component.html',
  styleUrls: ['./editemenu.component.css']
})
export class EditemenuComponent implements OnInit {

  dataArray:any ={};

  _id:any
  name:any
 price:any
 image:any = '';




constructor(private uploadService : UploadService  ,private _auth:EditemenuAdminResoService , private router:Router, private CatService : CategoryService, private route: ActivatedRoute, private adminResService : AdminRestoService){
this._id=localStorage.getItem('_id')
this.name=localStorage.getItem('name')
this.price=localStorage.getItem('price')
// this.image=localStorage.getItem('image')
this.messageSuccess=''

  this.route.paramMap.subscribe(params => {
    const itemId = params.get('id');
    console.log(itemId);

    let adminResto = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    this.adminResService.getAdminRestoById(adminResto._id).subscribe(async (data) => {

        await data.Menu.forEach((element: any) => {
          if (element._id == itemId) {
            this.dataArray = element;
          }
        });

        console.log(this.dataArray);
    });

  });
}


messageSuccess=''

  updatenewProfil(name:string, price:string) {
    let adminResto = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    this.adminResService.getAdminRestoById(adminResto._id).subscribe(async (data) => {

      if (this.image == '') {
        adminResto.Menu.map((element: any) => {
          if (element._id == this.dataArray._id) {
            element.name = name;
            element.price = price;
          }
        });

        this.adminResService.UpdateAdminRest(adminResto).subscribe(async (data:any) => {
          console.log(data);
          localStorage.setItem('AdminResto', JSON.stringify(data.adminResto));
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Menu mis à jour',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/admin-resto/menu']);
        });
      } else {
        this.uploadService.uploadImage(this.image).subscribe(async (data) => {

          adminResto.Menu.map((element: any) => {
            if (element._id == this.dataArray._id) {
              element.name = name;
              element.price = price;
              element.urlImage = data.filePath;
            }
          });

          this.adminResService.UpdateAdminRest(adminResto).subscribe(async (data:any) => {
            console.log(data);
            localStorage.setItem('AdminResto', JSON.stringify(data.adminResto));
            Swal.fire({
              icon: 'success',
              title: ' Menu mis à jour',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/admin-resto/menu']);
          });
        });
      }
    });
  }



  selectImage(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file;
    }
  }


  ngOnInit(): void {
  }


}
