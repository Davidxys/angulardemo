import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { SotckService } from './shared/sotck.service';
import { Stock2Component } from './stock2/stock2.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [SotckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
