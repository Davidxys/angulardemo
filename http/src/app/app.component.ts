import { Component } from '@angular/core';
import {NgLayer, NgLayerRef, NgLayerComponent} from "angular2-layer";
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgLayer]
})
export class AppComponent {
  title = 'app';
  constructor(private ly:NgLayer) {}
	
	config:any = {
		inSelector:"fallDown",
		outSelector:"rollOut",
		title:"angular2 layer",
		align:"top",
		parent: this,
		dialogComponent:DialogComponent,
		closeAble: false
	}
	
	dialog(){
		this.ly.dialog(this.config);
	}
	
	alert(){
		this.ly.alert(this.config);
	}
	
	confirm(){
		this.ly.confirm(this.config);
	}
	
	loading(){
		let tip = this.ly.loading(this.config);
		
		setTimeout(()=>{tip.close();}, 2000)
	}
	
	tip(){
		this.ly.tip(this.config);
	}
}
