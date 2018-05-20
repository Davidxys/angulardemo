import { Component, OnInit } from '@angular/core';
import { SotckService, Stock } from '../shared/sotck.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stock:Stock;
  constructor(public stockService:SotckService) { }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
