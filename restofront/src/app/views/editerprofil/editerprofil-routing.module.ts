import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditerprofilComponent } from './editerprofil/editerprofil.component';


const routes: Routes = [
  {path:'',component:EditerprofilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditerprofilRoutingModule { }
