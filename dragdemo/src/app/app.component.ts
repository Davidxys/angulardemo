import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log("handling item");
        break;
      case 'task-list':
        console.log('task-list');
        break;
    }
  }
}
