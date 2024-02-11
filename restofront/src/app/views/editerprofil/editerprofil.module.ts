import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditerprofilRoutingModule } from './editerprofil-routing.module';
import { EditerprofilComponent } from './editerprofil/editerprofil.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditerprofilComponent
  ],
  imports: [
    CommonModule,
    EditerprofilRoutingModule,
    RouterModule,FormsModule
  ]
})
export class EditerprofilModule { }
