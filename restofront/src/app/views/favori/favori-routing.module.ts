import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriComponent } from './favori/favori.component';

const routes: Routes = [
  {path:'',component:FavoriComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriRoutingModule { }
