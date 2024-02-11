import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifiermodepasseComponent } from './modifiermodepasse/modifiermodepasse.component';

const routes: Routes = [
  {path:'',component:ModifiermodepasseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifiermodepasseRoutingModule { }
