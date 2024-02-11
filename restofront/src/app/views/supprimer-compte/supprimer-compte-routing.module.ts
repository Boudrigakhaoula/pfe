import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component';

const routes: Routes = [
  {path:'',component:SupprimerCompteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupprimerCompteRoutingModule { }
