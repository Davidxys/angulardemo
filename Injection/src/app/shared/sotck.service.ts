import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SotckService {

  constructor(public logger:LoggerService) { }

  getStock():Stock{
    this.logger.log("getStock called");
    return new Stock(1, "IBM");
  }
}

export class Stock{
  constructor(public id:number, public name:string){

  }
}
