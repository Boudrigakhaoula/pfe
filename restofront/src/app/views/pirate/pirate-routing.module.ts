import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrirateComponent } from './prirate/prirate.component';

const routes: Routes = [
  {path:'',component:PrirateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PirateRoutingModule { }
