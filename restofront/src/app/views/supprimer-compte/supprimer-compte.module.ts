import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupprimerCompteRoutingModule } from './supprimer-compte-routing.module';
import { SupprimerCompteComponent } from './supprimer-compte/supprimer-compte.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupprimerCompteComponent
  ],
  imports: [
    CommonModule,
    SupprimerCompteRoutingModule,RouterModule,FormsModule
  ]
})
export class SupprimerCompteModule { }
