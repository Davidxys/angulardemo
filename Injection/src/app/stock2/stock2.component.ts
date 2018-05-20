import { Component, OnInit } from '@angular/core';
import { AnotherStockService } from '../shared/another-stock.service';
import { SotckService, Stock } from '../shared/sotck.service';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
  providers: [{provide: SotckService, useClass: AnotherStockService}]
})
export class Stock2Component implements OnInit {

  private stock:Stock;
  constructor(public stockService:SotckService) { }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
