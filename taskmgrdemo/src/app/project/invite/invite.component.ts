import { Component, OnInit } from '@angular/core';
import { renderTemplate } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styles: []
})
export class InviteComponent implements OnInit {
  items = [
    {
      id:1,
      name: 'zhangsan'
    },
    {
      id:2,
      name: 'zhangsan2'
    },
    {
      id:3,
      name: 'zhangsan3'
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  displayUser(user:{id:string; name:string}){
    return user ? user.name: '';
  }
}
