import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-compte',
  templateUrl: './cree-compte.component.html',
  styleUrls: ['./cree-compte.component.css']
})
export class CreeCompteComponent implements OnInit {


  constructor(private _ins:AuthService , private router: Router) { }

  ngOnInit(): void {
  }


  inscription(FirstName: string, LastName: string, DateBirth: string, Phone: string, Email: string, Adress: string, Password: string, ConfirmPassword: string) {
    // email regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // phone regex must be 8 digits
    const phoneRegex = /^[0-9]{8}$/;

    // checl if all fields are filled
    if (FirstName === '' || LastName === '' || DateBirth === '' || Phone === '' || Email === '' || Adress === '' || Password === '' || ConfirmPassword === '') {
      Swal.fire({
        title: 'Veuillez remplir tous les champs',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }// check if email is valid
    else if (!emailRegex.test(Email)) {
      Swal.fire({
        title: 'Veuillez saisir une adresse email valide',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }
    // check if phone is valid
    else if (!phoneRegex.test(Phone)) {
      Swal.fire({
        title: 'Veuillez saisir un numéro de téléphone valide',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }
    // check if password and confirm password are the same
    else if (Password !== ConfirmPassword) {
      Swal.fire({
        title: 'Les mots de passe ne correspondent pas',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }
    // send data to backend
    else {
      let user = {
        email: Email,
        password: Password,
        firstName : FirstName,
        lastName : LastName,
        phone : Phone,
        dateOfBirth : String(DateBirth),
        adress : Adress
      };

      this._ins.inscription(user).subscribe(async (response) => {
        if (response.successmessage) {
          await Swal.fire({
            title: 'validé',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/se_connecter']);
        } else if (response.errormessage) {
          await Swal.fire({
            title: response.errormessage,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      });
    }


  }

  protected readonly Date = Date;
}
