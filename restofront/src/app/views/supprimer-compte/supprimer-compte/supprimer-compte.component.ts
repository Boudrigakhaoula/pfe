import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supprimer-compte',
  templateUrl: './supprimer-compte.component.html',
  styleUrls: ['./supprimer-compte.component.css']
})
export class SupprimerCompteComponent implements OnInit {

  _id:any
  currentUser:any
  constructor(private router:Router ,private _auth:AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('User') || '{}');
    console.log(this.currentUser)
   this._id = this.currentUser._id
   console.log(this._id)
  }

  delete(id:any){
    this._auth. deleteUser(id).subscribe(response=>{
      console.log(response)
      Swal.fire({
        icon: 'success',
        title: 'Succès',
  
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.removeItem('UserToken');
      localStorage.removeItem('User');
      this.router.navigate(['/']);
    })

  }


  ngOnInit(): void {
  }

}