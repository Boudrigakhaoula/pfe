import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRestoService } from 'src/app/services/admin-resto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  currentProfil:any = {};
  image:any = '';
  constructor( private router: ActivatedRoute, private route:Router , private adminresto:AdminRestoService){
    this.currentProfil = JSON.parse(localStorage.getItem('AdminResto') || '{}');
  }
  updateProfil(name:string, address:string, ville:string,phone:string,  urlFacebook:string,urlInstagram:string) {

    // check if all fields are filled
    if (name == "" || address == "" || phone == "" || ville == "" || urlFacebook == "" || urlInstagram == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir tous les champs!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      let newAdminresto = {
        _id: this.currentProfil._id,
        name: name,
        address: address,
        ville: ville,
        phone: phone,

        urlFacebook: urlFacebook,
        urlInstagram : urlInstagram
      };


      this.adminresto. UpdateProfilAdminRest(newAdminresto).subscribe((res:any) => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Profil mis à jour avec succès!',
          showConfirmButton: false,
          timer: 1500
        });

        localStorage.setItem('AdminResto', JSON.stringify(res.data));


      });
    }
  }


  ngOnInit(): void {
  }

}