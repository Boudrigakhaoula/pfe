import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierModule } from './panier.module';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:'',component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanierRoutingModule { }
