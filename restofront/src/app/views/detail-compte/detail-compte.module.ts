import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCompteRoutingModule } from './detail-compte-routing.module';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DetailCompteComponent
  ],
  imports: [
    CommonModule,
    DetailCompteRoutingModule,RouterModule
  ]
})
export class DetailCompteModule { }
