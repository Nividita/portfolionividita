import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {path:'', component: HomeComponent},{path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},{path:'projects',component:ProjectsComponent},
  { path: 'Skiils', component: SkillComponent }, 
    {path:'contact',component:ContactComponent},{path: '**',component: NotFoundError },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
