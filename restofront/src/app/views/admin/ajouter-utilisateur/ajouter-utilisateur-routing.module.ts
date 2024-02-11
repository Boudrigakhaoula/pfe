import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur.component';

const routes: Routes = [
  {path:'',component:AjouterUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterUtilisateurRoutingModule { }
