import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreeRoutingModule } from './entree-routing.module';
import { EntreeComponent } from '../entree/entree.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EntreeComponent
  ],
  imports: [
    CommonModule,
    EntreeRoutingModule,
    RouterModule
  ]
})
export class EntreeModule { }
