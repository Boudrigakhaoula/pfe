import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCommandeComponent } from './liste-commande.component';

const routes: Routes = [
  {path:'',component:ListeCommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeCommandeRoutingModule { }
