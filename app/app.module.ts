//provides boundaries within our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {ProductDetailComponent } from './products/product-detail.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe} from './products/product-filter.pipe';
import { StarComponent} from './shared/star.component';

@NgModule({
   //importing metadata
  imports: [ BrowserModule,
      FormsModule,
      HttpModule,
      //later we can factor this into multiple modules
      //remember that order matters for these routes
      RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id', component: ProductDetailComponent },
        { path: 'welcome', component: WelcomeComponent},
        { path : '', redirectTo: 'welcome', pathMatch: 'full'},
          //wildcard
        { path: '**',  redirectTo:'welcome', pathMatch:'full'}
      ])
  ],
  declarations: [ AppComponent,
      ProductListComponent,
      ProductFilterPipe,
      StarComponent,
      WelcomeComponent,
      ProductDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
