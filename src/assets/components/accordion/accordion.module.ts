import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemHeaderComponent } from './accordion-item/accordion-item-header/accordion-item-header.component';
import { AccordionItemBodyComponent } from './accordion-item/accordion-item-body/accordion-item-body.component';
import { AccordionItemBodyTitleComponent } from './accordion-item/accordion-item-body/accordion-item-body-title/accordion-item-body-title.component';
import { AccordionItemBodyDescriptionComponent } from './accordion-item/accordion-item-body/accordion-item-body-description/accordion-item-body-description.component';
import { IconModule } from '../icon/icon.module';

const ACCORDION_IMPORTS = [
  AccordionComponent,
  AccordionItemComponent,
  AccordionItemHeaderComponent,
  AccordionItemBodyComponent,
  AccordionItemBodyTitleComponent,
  AccordionItemBodyDescriptionComponent,
]

@NgModule({
  declarations: ACCORDION_IMPORTS,
  imports: [ CommonModule, IconModule ],
  exports: ACCORDION_IMPORTS,
})
export class AccordionModule { }
