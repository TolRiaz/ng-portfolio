import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './sidebar.menu';

interface User {
  name : string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user : User;

  menus = MENU_ITEMS;

  constructor() {
    this.user = { name: 'tolriaz', }
  }

  ngOnInit(): void {
  }
}
