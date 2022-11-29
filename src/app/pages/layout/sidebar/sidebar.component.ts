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

  user    : User;
  priv_id : string;

  menus = MENU_ITEMS;

  constructor() {
    this.user = { name: 'tolriaz', }
    this.priv_id = this.menus[0].title;
  }

  ngOnInit(): void {
  }

  clickedMenu( event: any ) {
    var target = event.currentTarget;
    let id     = target.id;

    console.log( this.priv_id, '=>', id )

    if (id == this.priv_id) {
      // console.log('same');
    } else {
      // console.log('not same');
      this.priv_id = target.id;
    }
  }

}
