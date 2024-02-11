import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Resto1Component } from './resto1/resto1.component';

const routes: Routes = [
  {path:'',component:Resto1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Resto1RoutingModule { }
