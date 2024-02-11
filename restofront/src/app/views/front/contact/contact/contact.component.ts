import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from 'src/app/services/dessert.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private _auth:DessertService  , private router: Router) { }

  ngOnInit(): void {
  }

  
  demandeAjouterResto(data:any) {
       // email regex
       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

       // phone regex must be 8 digits
       const phoneRegex = /^[0-9]{8}$/;
    console.log('data', data);
    if ((data.nameresto === "") || (data.email === "") ||(data.Adresse==="")||(data.ville==="")||(data.numerotel==="")||(data.instagram==="")||(data.facebook==="")||(data.motdepasse==="")||(data.objet==="")) {
      Swal.fire({
        icon: 'error',
        text: "Veuillez remplir tous les champs.",
        iconColor: '#ff7300', // Changer la couleur de l'icône
  confirmButtonColor: '#ff7300',
      })}else if (!emailRegex.test(data.email)){
        Swal.fire({
          icon: 'error',
          text: "Veuillez vérifier votre adresse e-mail.",
          iconColor: '#ff7300', // Changer la couleur de l'icône
    confirmButtonColor: '#ff7300',
        })
      } else if(!phoneRegex.test(data.numerotel)) {
        Swal.fire({
          icon: 'error',
          text: "Veuillez saisir un numéro de téléphone valide",
          iconColor: '#ff7300',
          confirmButtonColor: '#ff7300',
        }) 
      }
      
      
      
      else{
    this._auth
      .demandeAjouterResto({
        nameresto: data.nameresto,
        email: data.email,
        Adresse: data.Adresse,
        ville: data.ville,
        numerotel: data.numerotel,
        instagram: data.instagram,
        facebook: data.facebook,
        
       
        motdepasse:data.motdepasse,
        objet:data.objet
      
     // image:data.append('image',this.image)
      
        
      })
      .subscribe((res) => {
        this.router.navigate(['']);
        Swal.fire({
          title: 'Votre message est bien envoyé.',
          confirmButtonColor: '#ff7300',
          confirmButtonText:'ok'    ,
      
        });
      });
  }
}
}