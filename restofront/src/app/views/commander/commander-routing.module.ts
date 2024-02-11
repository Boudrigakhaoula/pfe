import { CommaExpr } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommanderComponent } from './commander/commander.component';

const routes: Routes = [
  {path:'',component:CommanderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanderRoutingModule { }
