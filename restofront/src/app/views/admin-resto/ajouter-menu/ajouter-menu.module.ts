import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AjouterMenuRoutingModule } from './ajouter-menu-routing.module';
import { AjouterMenuComponent } from './ajouter-menu.component';


@NgModule({
  declarations: [
    AjouterMenuComponent
  ],
  imports: [
    CommonModule,
    AjouterMenuRoutingModule,
    FormsModule
  ]
})
export class AjouterMenuModule { }
