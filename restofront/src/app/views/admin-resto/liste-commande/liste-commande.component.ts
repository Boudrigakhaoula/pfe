import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminRestoService } from 'src/app/services/admin-resto.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  dataArray: any = [] ;
  constructor(private cmd : CommandeService ,private route:ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      const itemId = params.get('id');
      console.log(itemId);

      let adminResto = JSON.parse(localStorage.getItem('AdminResto') || '{}');
      this.cmd.getAllCommandes().subscribe((data:any) => {
        data.map((elem:any) => {
          if(elem.Resto == adminResto._id) {
            this.dataArray.push(elem);
          }
        });
        console.log(this.dataArray);
      })

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  delete(id: any, i: any) {
    let TokenAdmin = localStorage.getItem('AdminAuthToken');
    this.cmd.deletecommande(id).subscribe(async (response) => {
      await Swal.fire({
        title: response.successmessage,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.dataArray.splice(i, 1);
      const datastri = JSON.stringify(this.dataArray);
      localStorage.setItem("AdminAuthToken", datastri);
    });
    
   

}}