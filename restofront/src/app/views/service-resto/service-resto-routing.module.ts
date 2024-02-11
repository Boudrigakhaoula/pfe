import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from '../front/service/service/service.component';
import { ServiceRestoComponent } from './service-resto.component';

const routes: Routes = [  {path:'',component:ServiceRestoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRestoRoutingModule { }
