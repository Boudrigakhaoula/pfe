import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRestoComponent } from './dashboard-resto.component';

const routes: Routes = [
  {path:'',component:DashboardRestoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRestoRoutingModule { }
