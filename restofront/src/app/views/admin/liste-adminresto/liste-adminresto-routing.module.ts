import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAdminrestoComponent } from './liste-adminresto.component';

const routes: Routes = [ {path:'',component:ListeAdminrestoComponent}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeAdminrestoRoutingModule { }
