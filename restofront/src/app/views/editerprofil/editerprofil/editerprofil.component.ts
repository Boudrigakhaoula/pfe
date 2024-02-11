import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editerprofil',
  templateUrl: './editerprofil.component.html',
  styleUrls: ['./editerprofil.component.css']
})
export class EditerprofilComponent implements OnInit {

  currentUser:any = {};
  constructor(private _auth: AuthService, private router: ActivatedRoute, private route: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('User') || '{}');
  }

  updateUser(newFirstName:string, newLastName:string, newDOB:string, newPhone:string, newEmail:string) {

    // check if all fields are filled
    if (newFirstName == "" || newLastName == "" || newDOB == "" || newPhone == "" || newEmail == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir tous les champs!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      let newUser = {
        _id: this.currentUser._id,
        firstName: newFirstName,
        lastName: newLastName,
        dob: newDOB,
        phone: newPhone,
        email: newEmail
      };

      this._auth.updateUser(newUser).subscribe((res:any) => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Profil mis à jour avec succès!',
          showConfirmButton: false,
          timer: 1500
        });

        localStorage.setItem('User', JSON.stringify(res.data));
        this.route.navigate(['/liste-resto/editer-profil']);

      });
    }
  }


  ngOnInit(): void {
  }

}