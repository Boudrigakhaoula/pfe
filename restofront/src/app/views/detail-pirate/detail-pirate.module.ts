import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPirateRoutingModule } from './detail-pirate-routing.module';
import { DetailPirateComponent } from './detail-pirate/detail-pirate.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DetailPirateComponent
  ],
  imports: [
    CommonModule,
    DetailPirateRoutingModule,FormsModule,RouterModule
  ]
})
export class DetailPirateModule { }
