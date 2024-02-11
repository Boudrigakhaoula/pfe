import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeUtilisateurRoutingModule } from './liste-utilisateur-routing.module';
import { ListeUtilisateurComponent } from './liste-utilisateur.component';


@NgModule({
  declarations: [
    ListeUtilisateurComponent
  ],
  imports: [
    CommonModule,
    ListeUtilisateurRoutingModule
  ]
})
export class ListeUtilisateurModule { }
