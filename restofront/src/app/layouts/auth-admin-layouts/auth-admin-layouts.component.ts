import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-auth-admin-layouts',
  templateUrl: './auth-admin-layouts.component.html',
  styleUrls: ['./auth-admin-layouts.component.css']
})
export class AuthAdminLayoutsComponent implements OnInit {

  admin ={
    email:'',
    motdepasse:''
  }
  constructor (private _adm:AdminService, private router: Router){

  }

  ngOnInit():void{

  }


  token: any;

  login_admin(email: string, password: string) {
    if (email == '' || password == '') {
      alert('Veuillez remplir tous les champs');
    }
    else {
      this._adm.login_admin(email, password).subscribe((data:any )=> {
        if (data.successmessage) {
          console.log(data);
          this.token = data.token;
          this.admin = data.FoundAdmin;
          localStorage.setItem('AdminAuthToken', this.token);
          localStorage.setItem('Admin', JSON.stringify(this.admin));
          this.router.navigate(['/admin_ben']);

        } else if (data.errormessage) {
          alert(data.errormessage);

        } else {
          alert('Erreur inconnue');
        }

      });
    }
  }
}
