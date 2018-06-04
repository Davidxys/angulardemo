import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    // trigger('square', 
    //   [
    //     state('green', style({'background-color':'green', 'height':'100px', 'transform':'translateY(-100%)'})),
    //     state('red', style({'background-color':'red', 'height':'100px','transform':'translateY(100%)'})),
    //     transition('green => red', animate('.8s ease-in')),
    //     transition('red => green', animate('.8s ease-out'))
    //   ])
    trigger('square', 
      [
        state('green', style({'background-color':'green', 'height':'100px', 'transform':'translateY(-100%)'})),
        state('red', style({'background-color':'red', 'height':'100px','transform':'translateY(100%)'})),
        transition('green => red', animate('.8s ease-in')),
        transition('red => green', animate(5000, keyframes(
          [
            style({transform: 'translateY(100%)'}),
            style({transform: 'translateY(90%)'}),
            style({transform: 'translateY(85&%)'}),
            style({transform: 'translateY(50%)'}),
            style({transform: 'translateY(40%)'}),
            style({transform: 'translateY(10%)'}),
            style({transform: 'translateY(0)'})
          ]
        )))
      ])
  ]
})
export class AppComponent {
  squareState: string;
  darkTheme = false;
  switchTheme(dark) {
    this.darkTheme = dark;
    // this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
    if (dark) {
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    }
  }
  constructor(private oc: OverlayContainer) {
  }
  onClick(){//动画
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
