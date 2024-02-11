import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeCommandeRoutingModule } from './liste-commande-routing.module';
import { ListeCommandeComponent } from './liste-commande.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListeCommandeComponent
  ],
  imports: [
    CommonModule,
    ListeCommandeRoutingModule,FormsModule,RouterModule
  ]
})
export class ListeCommandeModule { }
