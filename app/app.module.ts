//provides boundaries within our application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
   //importing metadata
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
