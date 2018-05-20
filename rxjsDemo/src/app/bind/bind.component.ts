import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms'
import 'rxjs';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  searchInput:FormControl = new FormControl();
  size:number = 7;
  constructor() { 
      this.searchInput.valueChanges
        .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }
  getStockInfo(value:string) {
    console.log(value);
  }

}
