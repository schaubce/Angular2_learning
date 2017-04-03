//provides boundaries within our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {ProductModule} from "./products/product.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
   //importing metadata
  imports: [
      //ng if, ngfor and registers critical service modules
      BrowserModule,
      //register http service provider
      HttpModule,
      //later we can factor this into multiple modules
      //remember that order matters for these routes
      RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent},
        { path : '', redirectTo: 'welcome', pathMatch: 'full'},
          //wildcard
        { path: '**',  redirectTo:'welcome', pathMatch:'full'}
      ]),
      //feature modules
      ProductModule
  ],
  //list of components that belong to this module
  declarations: [
      AppComponent,
      WelcomeComponent
  ],
  //identifies the root component as the app component
  bootstrap: [ AppComponent ]
})
export class AppModule { }
