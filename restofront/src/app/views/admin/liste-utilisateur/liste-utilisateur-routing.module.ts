import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUtilisateurComponent } from './liste-utilisateur.component';

const routes: Routes = [
  {path:'',component:ListeUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeUtilisateurRoutingModule { }
