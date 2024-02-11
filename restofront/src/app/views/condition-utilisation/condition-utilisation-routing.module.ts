import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionUtilisationComponent } from '../front/condition-utilisation/condition-utilisation.component';

const routes: Routes = [
  {path:'',component:ConditionUtilisationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionUtilisationRoutingModule { }
