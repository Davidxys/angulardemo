import { Component, OnInit } from '@angular/core';
import {NgLayer, NgLayerRef, NgLayerComponent} from "angular2-layer";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  ngOnInit() {
    
  }
  data = "angular2 layer";
	
	constructor(private ly:NgLayerRef, private l:NgLayer) {}
	
	setTitle(){this.ly.setTitle("Angular2 Layer Title");}
	
	close(){this.ly.close();}
	
	showCloseBtn(){this.ly.showCloseBtn(true)};
	
	showData(){alert(this.data)};

}
