import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifiermodepasseRoutingModule } from './modifiermodepasse-routing.module';
import { ModifiermodepasseComponent } from './modifiermodepasse/modifiermodepasse.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModifiermodepasseComponent
  ],
  imports: [
    CommonModule,
    ModifiermodepasseRoutingModule,RouterModule,FormsModule
  ]
})
export class ModifiermodepasseModule { }
