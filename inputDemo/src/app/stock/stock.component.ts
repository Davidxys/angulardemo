import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input()
  private keyWord: string;

  private price:number;

  @Output()
  searchResult:EventEmitter<StockInfo> = new EventEmitter();

  @Output()
  addCard:EventEmitter<StockInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      let stockInfo:StockInfo = new StockInfo(this.keyWord, 100 * Math.random())
      this.price = stockInfo.price;
      this.searchResult.emit(stockInfo);
    }, 3000);
  }
  bugStock(){
    this.addCard.emit(new StockInfo(this.keyWord, this.price));
  }


}

export class StockInfo {
  constructor(public name: string, public price: number) { }
}
