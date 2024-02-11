import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonCompteComponent } from './mon-compte/mon-compte.component';

const routes: Routes = [
  {path:'',component:MonCompteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonCompteRoutingModule { }
