import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Resto1RoutingModule } from './resto1-routing.module';
import { Resto1Component } from './resto1/resto1.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Resto1Component
  ],
  imports: [
    CommonModule,
    Resto1RoutingModule,
    RouterModule
  ]
})
export class Resto1Module { }
