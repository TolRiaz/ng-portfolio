import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SkillsComponent } from './skills/skills.component';
import { AccordionModule } from 'src/assets/components/accordion/accordion.module';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AccordionModule,
  ]
})
export class PagesModule { }
