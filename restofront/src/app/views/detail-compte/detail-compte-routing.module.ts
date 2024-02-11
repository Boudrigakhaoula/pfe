import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';

const routes: Routes = [
  {path:'',component:DetailCompteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCompteRoutingModule { }
