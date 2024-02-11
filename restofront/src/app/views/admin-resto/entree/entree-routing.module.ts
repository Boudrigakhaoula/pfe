import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntreeComponent } from './entree.component';

const routes: Routes = [
  {path:'',component:EntreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreeRoutingModule { }
