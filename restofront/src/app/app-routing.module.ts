import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontlayoutComponent } from './layouts/frontlayout/frontlayout.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { HomeComponent } from './views/front/home/home/home.component';
import { ServiceComponent } from './views/front/service/service/service.component';
import { ContactComponent } from './views/front/contact/contact/contact.component';
import { CreeCompteComponent } from './views/front/inscription/cree-compte/cree-compte.component';
import { SeConnecterComponent } from './views/front/se_connecter/se-connecter/se-connecter.component';


// import { ModifiermodepasseComponent } from './views/front/modifiermodepasse/modifiermodepasse/modifiermodepasse.component';
// import { SupprimercompteComponent } from './views/front/supprimercompte/supprimercompte.component';
import { AuthAdminLayoutsComponent } from './layouts/auth-admin-layouts/auth-admin-layouts.component';
import { AdminRestoComponent } from './layouts/admin-resto/admin-resto.component';
import { AuthAdminRestoComponent } from './layouts/auth-admin-resto/auth-admin-resto.component';
import { ListeRestaurantComponent } from './layouts/liste-restaurant/liste-restaurant.component';
import { EditemenuComponent } from './views/admin-resto/editemenu/editemenu.component';

import { AuthGuard } from './guards/auth.guard';
import { ConditionUtilisationComponent } from './views/front/condition-utilisation/condition-utilisation.component';
import {AdminLoggedInGuard} from "./guards/admin-logged-in.guard";
import {RestoAuthGuard} from "./guards/resto-auth.guard";
import {RestoLoggedInGuard} from "./guards/resto-logged-in.guard";
import {UserauthGuard} from "./guards/userauth.guard";
import {UserloggedinGuard} from "./guards/userloggedin.guard";

const routes: Routes = [

  {path:'',component:FrontlayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'service',component:ServiceComponent},
    {path:'contact',component:ContactComponent},
    {path:'créer_compte',component:CreeCompteComponent},
    {path:'se_connecter',component:SeConnecterComponent, canActivate:[UserloggedinGuard]},
    {path:'condition',component:ConditionUtilisationComponent}
  ]},
  {path:'admin-resto',component:AuthAdminRestoComponent},

  {path:'admin_ben',component:AdminlayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'listeuser',loadChildren:()=>import('./views/admin/liste-utilisateur/liste-utilisateur.module').then(m=>m.ListeUtilisateurModule)},
    {path:'listeadmin',loadChildren:()=>import('./views/admin/liste-adminresto/liste-adminresto.module').then(m=>m.ListeAdminrestoModule)},
  
    {path:'adduser',loadChildren:()=>import('./views/admin/ajouter-utilisateur/ajouter-utilisateur.module').then(m=>m.AjouterUtilisateurModule)},
  
   
   
   
  ], canActivate:[AuthGuard]},
  {path:'admin',component:AuthAdminLayoutsComponent, canActivate:[AdminLoggedInGuard]},

  {path:'admin_resto',component:AdminRestoComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin-resto/dashboard-resto/dashboard-resto.module').then(m=>m.DashboardRestoModule)},
    {path:'dashboard-resto',loadChildren:()=>import('./views/admin-resto/dashboard-resto/dashboard-resto.module').then(m=>m.DashboardRestoModule)},
    {path:'commande',loadChildren:()=>import('./views/admin-resto/liste-commande/liste-commande.module').then(m=>m.ListeCommandeModule)},
   
   
    {path:'profil-resto',loadChildren:()=>import('./views/admin-resto/profil/profil.module').then(m=>m.ProfilModule)},
    {path:'add-menu-resto/:id',loadChildren:()=>import('./views/admin-resto/ajouter-menu/ajouter-menu.module').then(m=>m.AjouterMenuModule)},
   
    
  
    {path:'cat/:id',loadChildren:()=>import('./views/admin-resto/entree/entree.module').then(m=>m.EntreeModule)},
    {path:'editemenu/:id',loadChildren:()=>import('./views/admin-resto/editemenu/editemenu.module').then(m=>m.EditemenuModule)},
   
   
    
    {path:'liste_commande',loadChildren:()=>import('./views/admin-resto/liste-commande/liste-commande.module').then(m=>m.ListeCommandeModule)},


  ], canActivate:[RestoAuthGuard]
},

{path:'admin-resto/login',component:AuthAdminRestoComponent, canActivate:[RestoLoggedInGuard]},




{path:'liste-resto',component:ListeRestaurantComponent,children:[

  {path:'',loadChildren:()=>import('./views/resto1/resto1.module').then(m=>m.Resto1Module)},
  {path:'resto1',loadChildren:()=>import('./views/resto1/resto1.module').then(m=>m.Resto1Module)},
 {path:'mon-compte',loadChildren:()=>import('./views/mon-compte/mon-compte.module').then(m=>m.MonCompteModule)},
   {path:'contact',loadChildren:()=>import('./views/front/contact/contact/contact.component').then(m=>m.ContactComponent)},
   {path:'service',loadChildren:()=>import('./views/front/service/service/service.component').then(m=>m.ServiceComponent)},

   {path:'créer_compte',loadChildren:()=>import('./views/front/inscription/cree-compte/cree-compte.component').then(m=>m.CreeCompteComponent)},
  //  {path:'menu-resto',loadChildren:()=>import('./views/admin-resto/menu/menu.module').then(m=>m.MenuModule)},
   
  {path:'det-pirate/:id',loadChildren:()=>import('./views/detail-pirate/detail-pirate.module').then(m=>m.DetailPirateModule)},
  

  
   {path:'det-mon-compte',loadChildren:()=>import('./views/detail-compte/detail-compte.module').then(m=>m.DetailCompteModule)},
   {path:'editer-profil',loadChildren:()=>import('./views/editerprofil/editerprofil.module').then(m=>m.EditerprofilModule)},
  {path:'mod-passe',loadChildren:()=>import('./views/modifiermodepasse/modifiermodepasse.module').then(m=>m.ModifiermodepasseModule)},
  {path:'sup-compte',loadChildren:()=>import('./views/supprimer-compte/supprimer-compte.module').then(m=>m.SupprimerCompteModule)},
 
  
  {path:'menu-pirate/:id',loadChildren:()=>import('./views/pirate/pirate.module').then(m=>m.PirateModule)},
 
  {path:'panier',loadChildren:()=>import('./views/panier/panier.module').then(m=>m.PanierModule)},
  {path:'favori',loadChildren:()=>import('./views/favori/favori.module').then(m=>m.FavoriModule)},
  {path:'cmd',loadChildren:()=>import('./views/commander/commander.module').then(m=>m.CommanderModule)},
  {path:'condition1',loadChildren:()=>import('./views/condition-utilisation/condition-utilisation.module').then(m=>m.ConditionUtilisationModule)},
  {path:'serviceR',loadChildren:()=>import('./views/service-resto/service-resto.module').then(m=>m.ServiceRestoModule)},

], canActivate:[UserauthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
