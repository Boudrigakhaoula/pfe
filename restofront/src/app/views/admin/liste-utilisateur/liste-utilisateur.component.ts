import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {
  dataArray: any ;

  constructor(private _ins:AuthService) {

    this._ins.getall_utilisateur().subscribe(data=>this.dataArray=data)

  }
  delete(id:any,i:any){
    this._ins. deleteUser(id).subscribe(async response=>{
      await Swal.fire({
        title: 'Suppression avec succés',
        text: 'client supprimé',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.dataArray.splice(i,1)
    });

  }

    ngOnInit() : void{

    }

  }
