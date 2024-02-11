import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanderRoutingModule } from './commander-routing.module';
import { CommanderComponent } from './commander/commander.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommanderComponent
  ],
  imports: [
    CommonModule,
    CommanderRoutingModule,RouterModule
  ]
})
export class CommanderModule { }
