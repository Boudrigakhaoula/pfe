import { Component, OnInit } from '@angular/core';
import { AjouteradminRestoService } from 'src/app/services/ajouteradmin-resto.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-liste-adminresto',
  templateUrl: './liste-adminresto.component.html',
  styleUrls: ['./liste-adminresto.component.css']
})
export class ListeAdminrestoComponent implements OnInit {

  dataArray: any ;

  constructor(private _adm:AjouteradminRestoService) {

    this._adm.getall_adminresto().subscribe(data=>{console.log(data)
      this.dataArray=data})

  }
  delete(id:any,i:any){
    let TokenAdmin = localStorage.getItem('AdminAuthToken');
    this._adm. deleteadmin_resto(id, TokenAdmin).subscribe(async (response)=>{
      await Swal.fire({
        title: response.successmessage,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.dataArray.splice(i,1)
    });

  }
    ngOnInit() : void{

    }
}
