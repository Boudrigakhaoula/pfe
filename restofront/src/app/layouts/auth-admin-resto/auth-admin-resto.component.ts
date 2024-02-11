import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRestoService } from 'src/app/services/admin-resto.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-auth-admin-resto',
  templateUrl: './auth-admin-resto.component.html',
  styleUrls: ['./auth-admin-resto.component.css']
})
export class AuthAdminRestoComponent implements OnInit {

  admin_resto ={
    email:'',
    motdepasse:''
  }
  constructor (private _adm_resto:AdminRestoService, private router: Router){

  }

  ngOnInit():void{

  }

  token: any;

  login_admin_resto(email: string, password: string) {
    //email regex
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    //check if all fields are filled
    if (email == "" || password == "") {
      Swal.fire({
        icon: "error",
        title: "Veuillez remplir tous les champs",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // check if email is valid
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Email invalide",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    let AdminResto = {
      email: email,
      password: password,
    }

    this._adm_resto.login_admin_resto(AdminResto).subscribe((data:any) => {
      if(data.successmessage){
        this.token = data.token;
        localStorage.setItem("AdminRestoToken", this.token);
        localStorage.setItem("AdminResto", JSON.stringify(data.FoundAdminRest));
        this.router.navigate(["/admin_resto"]);
      } else {
        Swal.fire({
          icon: "error",
          title: data.errormessage,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  }


}
