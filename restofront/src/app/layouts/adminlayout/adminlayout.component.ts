import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {
  dataArray3:any;
  dataArray:any;
  dataArray1:any;

  constructor(  private _auth:DessertService,private router:Router){

    this._auth.getcontact().subscribe(data=> this.dataArray3=data)

  }

// logout
logout(){
  localStorage.removeItem('AdminAuthToken');
  localStorage.removeItem('Admin');
  this.router.navigate(['/admin']);
}
delete(id:any,i:any){
  this._auth. deleteUser(id).subscribe(response=>{
    console.log(response)

    // this.dataArray3.splice(i,1)
  });

  const result =  this.dataArray3.filter((item : any) => item._id != id);
  this.dataArray3 = result ;

}



  ngOnInit(): void {
  }

}
