import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './sidebar.menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  id : string;
  menus = MENU_ITEMS;

  constructor() {
    this.id = this.menus[0].title;
  }

  ngOnInit(): void {
    console.log(this.menus, this.id);
  }

  public parentId = "";
  clickedMenu( event: any ) {
    var target = event.currentTarget;
    console.log('tt', target);

    let parentId = target.id;

    if (parentId == this.parentId) {
      console.log('parent', parentId);
      console.log('target', target.id);
      console.log('same');
      this.parentId = "";
    } else {
      console.log('not same');
      this.parentId = target.id;
    }
  }

}
