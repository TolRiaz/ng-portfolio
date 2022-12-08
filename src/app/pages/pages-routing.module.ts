import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

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
      {
        path: 'work',
        component: WorkComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
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
