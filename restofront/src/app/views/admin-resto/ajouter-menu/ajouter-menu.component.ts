import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EntreeService } from 'src/app/services/entree.service';

import { SuiteService } from 'src/app/services/suite.service';
import {UploadService} from "../../../services/upload.service";
import {CategoryService} from "../../../services/category.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-ajouter-menu',
  templateUrl: './ajouter-menu.component.html',
  styleUrls: ['./ajouter-menu.component.css']
})
export class AjouterMenuComponent implements OnInit {
  selectedFile: any  = null;
  currentCategory: any = {};
  oldUser: any = {};


  constructor(private _entree:EntreeService , private router: Router, private uploadService:UploadService, private CatService: CategoryService, private route:ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const catId = params.get('id');

      // Call the necessary service method here or perform any other logic
      this.CatService.getCategoryById(catId).subscribe(data => {
        this.currentCategory = data;
      });
    });

    this.oldUser = JSON.parse(localStorage.getItem('AdminResto') || '{}');


  }
  select(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
  }
  Ajouter(name:string, price:string){

if(name==="" ||price===""){
  Swal.fire({
    title: 'Veuillez remplir tous les champs',
    icon: 'error',
    showConfirmButton: false,
    timer: 1500
  });
}
else if (this.uploadService.uploadImage(this.selectedFile)){
  Swal.fire({
    title: 'Veuillez remplir tous les champs',
    icon: 'error',
    showConfirmButton: false,
    timer: 1500
  });
} let tempArray = this.oldUser.Menu;
console.log(tempArray);
  // Vérifier si le menu existe déjà
  const menuExists = tempArray.some((menu: any) => menu.name === name);
  if (menuExists) {
    Swal.fire({
      title: 'Le menu existe déjà',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    });
    return; // Arrêter l'exécution de la fonction si le menu existe déjà
  }


    this.uploadService.uploadImage(this.selectedFile).subscribe((response: any) => {
      let imagepath = response.filePath;


      let tempArray = this.oldUser.Menu;
      console.log(tempArray);

      tempArray.push({
        name: name,
        price: price,
        urlImage: imagepath,
        category: this.currentCategory.name,
        promo:'0'
      });
      this.oldUser.Menu = tempArray;

      localStorage.setItem('AdminResto', JSON.stringify(this.oldUser));

      let newuser = {
        _id: this.oldUser._id,
        name: this.oldUser.name,
        email: this.oldUser.email,
        password: this.oldUser.password,
        address: this.oldUser.address,
        phone: this.oldUser.phone,
        urlFacebook: this.oldUser.urlFacebook,
        urlInstagram: this.oldUser.urlInstagram,
        UrlImage: this.oldUser.UrlImage,
        Avis: this.oldUser.Avis,
        Commandes: this.oldUser.Commandes,
        Menu: tempArray,
      };

      this._entree.Ajouter(newuser).subscribe(async (data : any) => {
        if (data.successmessage) {
          await Swal.fire({
            title: 'Menu ajouté avec succés',
            text: '',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          await Swal.fire({
            title: 'Erreur',
            text: data.errormessage,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    });
  }
}

