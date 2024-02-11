import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PirateRoutingModule } from './pirate-routing.module';
import { PrirateComponent } from './prirate/prirate.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PrirateComponent
  ],
  imports: [
    CommonModule,
    PirateRoutingModule,
    RouterModule
  ]
})
export class PirateModule { }
