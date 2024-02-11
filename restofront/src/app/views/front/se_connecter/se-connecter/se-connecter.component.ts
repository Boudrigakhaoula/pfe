import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {
  author={
    _id:'',
    email:'',
    motdepasse:'',
    name:'',
    prenom:'',
    datenais:'',
    telephone:''
  }
  dataReceived : any

  constructor( private _auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  token: any;

  loginHandler(email:string, password:string) {
    if (email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        text: "Veuillez remplir tous les champs.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else {
      let user=  {
        email: email,
        password: password,
      }
      this._auth.userLogin(user).subscribe((data:any) => {
        if (data.successmessage) {
          localStorage.setItem('UserToken', data.token);
          localStorage.setItem('User', JSON.stringify(data.FoundUser));
          this.router.navigate(['/liste-resto']);
        } else if (data.errormessage) {
          Swal.fire({
            icon: 'error',
            text: 'E-mail ou mot de passe erroné',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  }

  login(data: any) {
    console.log('data', data);
    if((data.email==="")||(data.motdepasse==="")){
      Swal.fire({
        icon: 'error',
        text: "Veuillez remplir tous les champs.",
        iconColor: '#ff7300', // Changer la couleur de l'icône
  confirmButtonColor: '#ff7300',
      })

    }else if ((data.email!=="")||(data.motdepasse!=="")){
    this._auth.login({

      email: data.email,
      motdepasse: data.motdepasse,

    }).subscribe(
      (res: any) =>
       {this.dataReceived=res

        console.log(res)
        this._auth.saveDataProfil(this.dataReceived.token)
        // this.token = res;
        // localStorage.setItem('token', this.token.myToken);
        // console.log(this._auth.ProfilUser.token)

        this.router.navigate(['/liste-resto']);
      },
      (err: any) => {
        Swal.fire({
          icon: 'error',
          text:
          " Veuillez vérifier vos informations d'identification ou créer un nouveau compte.",
          iconColor: '#ff7300', // Changer la couleur de l'icône
    confirmButtonColor: '#ff7300',
        })
      }
    );
  }

}

}
