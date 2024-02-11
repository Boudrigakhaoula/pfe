import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditemenuRoutingModule } from './editemenu-routing.module';
import { EditemenuComponent } from './editemenu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditemenuComponent
  ],
  imports: [
    CommonModule,
    EditemenuRoutingModule,RouterModule,FormsModule
  ]
})
export class EditemenuModule { }
