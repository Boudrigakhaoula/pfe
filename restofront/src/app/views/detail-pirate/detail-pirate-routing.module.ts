import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPirateComponent } from './detail-pirate/detail-pirate.component';

const routes: Routes = [  {path:'',component:DetailPirateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPirateRoutingModule { }
