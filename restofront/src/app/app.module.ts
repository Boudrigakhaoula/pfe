import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { CreeCompteComponent } from './views/front/inscription/cree-compte/cree-compte.component';
import { ContactComponent } from './views/front/contact/contact/contact.component';

import { SeConnecterComponent } from './views/front/se_connecter/se-connecter/se-connecter.component';

import { ServiceComponent } from './views/front/service/service/service.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { ConditionUtilisationComponent } from './views/front/condition-utilisation/condition-utilisation.component';
import { ServiceRestoComponent } from './views/service-resto/service-resto.component';



@NgModule({
  declarations: [
    AppComponent,
    CreeCompteComponent,
    ContactComponent,

    SeConnecterComponent,
    ServiceComponent,
    ConditionUtilisationComponent,
    ServiceRestoComponent,


 
  



   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
  FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
