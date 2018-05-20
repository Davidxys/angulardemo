import { Injectable } from '@angular/core';
import { SotckService, Stock } from './sotck.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherStockService implements SotckService{

  getStock(): Stock {
    return new Stock(2, "accenture");
  }
  constructor(public logger:LoggerService) { }
}
