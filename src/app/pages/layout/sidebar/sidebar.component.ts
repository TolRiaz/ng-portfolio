import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public parentId = "";
  clickedMenu( event: any ) {
    var target = event.currentTarget;
    let parentId = target.id;
    if (parentId == this.parentId) {
      console.log('same');
      this.parentId = "";
    } else {
      console.log('not same');
      this.parentId = target.id;
    }
  }

}
