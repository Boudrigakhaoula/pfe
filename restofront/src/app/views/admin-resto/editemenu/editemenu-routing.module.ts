import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemenuComponent } from './editemenu.component';

const routes: Routes = [
  {path:'',component:EditemenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditemenuRoutingModule { }
