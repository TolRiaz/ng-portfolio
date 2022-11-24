import { Component, Input, OnInit } from '@angular/core';

export interface IconConfig {
  icon: string;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  /**
   * Icon name
   * @param {string} status
   */
  @Input() icon: string;

  constructor() {
    this.icon = ""
  }

  ngOnInit(): void {
    console.log('icon', this.icon)
  }

}
