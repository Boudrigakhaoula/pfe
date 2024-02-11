import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifiermodepasse',
  templateUrl: './modifiermodepasse.component.html',
  styleUrls: ['./modifiermodepasse.component.css']
})
export class ModifiermodepasseComponent implements OnInit {

  currentUser:any = {};
  constructor(private _ins:AuthService , private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('User') || '{}');
  }

  ngOnInit(): void {
  }


  changePasswordHandler(oldPassword:string, newPassword:string, confirmPassword:string) {
    if (oldPassword == "" || newPassword == "" || confirmPassword == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir tous les champs!',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (newPassword != confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Les mots de passe ne correspondent pas!',
        showConfirmButton: false,
        timer: 1500
      })
    }else if (newPassword == oldPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Le nouveau mot de passe doit être différent de l\'ancien!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      this._ins.changePassword(oldPassword, newPassword, this.currentUser._id).subscribe((res:any) => {
        if (res.successmessage) {
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Mot de passe modifié avec succès!',
            showConfirmButton: false,
            timer: 1500
          });
        } else if (res.errormessage) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.errormessage,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }

}
