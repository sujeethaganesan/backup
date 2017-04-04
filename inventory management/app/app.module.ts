import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { InventoryApp } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    InventoryApp
    
  ],
  bootstrap: [ InventoryApp ]
})
export class AppModule { }
