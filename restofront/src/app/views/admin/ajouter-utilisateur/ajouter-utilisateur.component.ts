import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjouteradminRestoService } from 'src/app/services/ajouteradmin-resto.service';
import {UploadService} from "../../../services/upload.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  imageUpload: any;

  constructor(private _ajou:AjouteradminRestoService, private router:Router, private uploadService : UploadService) {}

  ngOnInit(): void {
  }
  ajouter(RestoName: string, RestoAdress: string, RestoVille: string, RestoPhone: string, RestoUrlFace: string, RestoUrlInsta: string, RestoEmail: string, RestoPassword: string) {
    const phoneRegex = /^[0-9]{8}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (RestoName===''|| RestoAdress===''||RestoVille==='' ||RestoPhone===''||RestoUrlFace===''||RestoUrlInsta===''||RestoEmail===''||RestoPassword==='') {
      Swal.fire({
        title: 'Veuillez remplir tous les champs',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }  
    else if (this.uploadService.uploadImage(this.imageUpload)){
      Swal.fire({
        title: 'Veuillez remplir tous les champs',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
    }
  this.uploadService.uploadImage(this.imageUpload).subscribe((data: any) => {
  
      if (data.filePath) {

        let Resto = {
          TokenAdmin: localStorage.getItem('AdminAuthToken'),
          email: RestoEmail,
          password: RestoPassword,
          name: RestoName,
          address: RestoAdress,
          phone: RestoPhone,
          ville: RestoVille,
          urlFacebook: RestoUrlFace,
          urlInstagram: RestoUrlInsta,
          UrlImage: data.filePath,
        
        };

        this._ajou.ajouter(Resto).subscribe(async (res: any) => {
           if(res.successmessage) {
            await Swal.fire({
              title: data.successmessage,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/admin_ben/listeadmin']);
        
          }  
             else if (!emailRegex.test(RestoEmail)) {
            Swal.fire({
              title: 'Veuillez saisir une adresse email valide',
              icon: 'error',
              showConfirmButton: false,
              timer: 1500
            });
          }
          else  if  (!phoneRegex.test(RestoPhone)) {
            Swal.fire({
              title: 'Veuillez saisir un numéro de téléphone valide',
              icon: 'error',
              showConfirmButton: false,
              timer: 1500
            });
          }
           else {
            await Swal.fire({
              title: 'Cet e-mail est déjà enregistré',
              icon: 'error',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
      }
    });
  }

  ChangeUploadPhoto(event: any) {
    this.imageUpload = event.target.files[0];
  }

}
