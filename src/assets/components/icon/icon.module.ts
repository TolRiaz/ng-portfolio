import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';

const ICON_IMPORTS = [
  IconComponent,
]

@NgModule({
  declarations: [ ICON_IMPORTS ],
  imports: [ CommonModule ],
  exports: [ ICON_IMPORTS ]
})
export class IconModule { }
