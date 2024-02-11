import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontlayoutComponent } from './frontlayout/frontlayout.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';
import { AdminRestoComponent } from './admin-resto/admin-resto.component';
import { AuthAdminLayoutsComponent } from './auth-admin-layouts/auth-admin-layouts.component';
import { AuthAdminRestoComponent } from './auth-admin-resto/auth-admin-resto.component';
import { ListeRestaurantComponent } from './liste-restaurant/liste-restaurant.component';
import { FormsModule } from '@angular/forms';
import { ConditionUtilisationComponent } from '../views/condition-utilisation/condition-utilisation.component';



@NgModule({
  declarations: [
    FrontlayoutComponent,
    AdminlayoutComponent,
    AdminRestoComponent,
    AuthAdminLayoutsComponent,
    AuthAdminRestoComponent,

    ListeRestaurantComponent,
     ConditionUtilisationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,FormsModule
  ]
})
export class LayoutsModule { }
