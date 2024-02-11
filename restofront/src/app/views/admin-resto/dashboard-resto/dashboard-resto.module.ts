import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRestoRoutingModule } from './dashboard-resto-routing.module';
import { DashboardRestoComponent } from './dashboard-resto.component';


@NgModule({
  declarations: [
    DashboardRestoComponent
  ],
  imports: [
    CommonModule,
    DashboardRestoRoutingModule
  ]
})
export class DashboardRestoModule { }
