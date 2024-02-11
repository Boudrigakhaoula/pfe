import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {
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