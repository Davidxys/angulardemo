import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit { 

  source:Observable<any>;
  stocks = [];
  constructor(public http: Http) {
    this.source = this.http.get('http://localhost:3000/stock/').map(response=>response.json());
  }

  ngOnInit() {
    this.source.subscribe(data=> this.stocks = data);
  }
  openPopup(){
    
  }
}
