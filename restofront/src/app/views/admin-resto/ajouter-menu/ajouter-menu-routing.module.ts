import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterMenuComponent } from './ajouter-menu.component';

const routes: Routes = [
  {path:'',component:AjouterMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterMenuRoutingModule { }
