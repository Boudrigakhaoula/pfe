import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.css']
})
export class DetailCompteComponent implements OnInit {
  _id:any
  currentUser:any
  firstName:any
  lastName:any
  constructor(private router:Router ,private _auth:AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('User') || '{}');
    console.log(this.currentUser)
   this.firstName = this.currentUser.firstName
   console.log(this._id)
   this.lastName= this.currentUser.lastName
  }

 // logout
 logout(){
   localStorage.removeItem('UserToken');
   localStorage.removeItem('User');
   this.router.navigate(['/se_connecter'])
 }

  ngOnInit(): void {
  }

}