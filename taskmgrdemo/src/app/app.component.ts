import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkTheme = false;
  switchTheme(dark){
    this.darkTheme = dark;
    // this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
    if(dark) {
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    }
  }
  constructor(private oc: OverlayContainer) {
  }
}
