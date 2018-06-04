import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HttpModule } from '@angular/http';
import { DialogComponent } from './dialog/dialog.component';
import { NgLayerComponent } from 'angular2-layer';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    DialogComponent,
    NgLayerComponent
  ],
  entryComponents:[NgLayerComponent, DialogComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);