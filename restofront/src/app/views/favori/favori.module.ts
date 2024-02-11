import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriRoutingModule } from './favori-routing.module';
import { FavoriComponent } from './favori/favori.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FavoriComponent
  ],
  imports: [
    CommonModule,
    FavoriRoutingModule,RouterModule
  ]
})
export class FavoriModule { }
