import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeAdminrestoRoutingModule } from './liste-adminresto-routing.module';
import { ListeAdminrestoComponent } from './liste-adminresto.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListeAdminrestoComponent
  ],
  imports: [
    CommonModule,
    ListeAdminrestoRoutingModule,RouterModule
  ]
})
export class ListeAdminrestoModule { }
