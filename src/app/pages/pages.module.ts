import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
