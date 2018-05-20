import { Component } from '@angular/core';
import { StockInfo } from './stock/stock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search:string;
  title = 'app';

  private currentPrice:number;
  searchResultHandler(stockInfo:StockInfo) {
    this.currentPrice = stockInfo.price;
  }
  private stockInfo:StockInfo;
  
  addCardHandler(stock:StockInfo){
    this.stockInfo = stock;
  }
}
