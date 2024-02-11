import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonCompteRoutingModule } from './mon-compte-routing.module';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MonCompteComponent
  ],
  imports: [
    CommonModule,
    MonCompteRoutingModule,
    RouterModule
  ]
})
export class MonCompteModule { }
