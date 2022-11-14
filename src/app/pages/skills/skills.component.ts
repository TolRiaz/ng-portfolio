import { Component, OnInit } from '@angular/core';
import { ACCORDION_ITEMS } from './test-items';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  items = ACCORDION_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
