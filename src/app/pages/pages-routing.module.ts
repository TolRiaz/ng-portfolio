import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },

      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: '**', redirectTo: 'about' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
