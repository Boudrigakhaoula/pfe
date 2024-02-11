import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterUtilisateurRoutingModule } from './ajouter-utilisateur-routing.module';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterUtilisateurComponent
  ],
  imports: [
    CommonModule,
    AjouterUtilisateurRoutingModule, 
    FormsModule,
    HttpClientModule,
  ]
})
export class AjouterUtilisateurModule { }
