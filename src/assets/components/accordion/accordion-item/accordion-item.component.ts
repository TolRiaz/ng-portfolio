import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccordionItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
