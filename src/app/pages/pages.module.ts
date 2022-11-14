import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SkillsComponent } from './skills/skills.component';
import { AccordionModule } from 'src/assets/components/accordion/accordion.module';


@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AccordionModule,
  ]
})
export class PagesModule { }
