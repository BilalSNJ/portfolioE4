import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtsSioComponent } from './bts-sio/bts-sio.component';
import { ContactComponent } from './contact/contact.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { HomeComponent } from './home/home.component';
import { LegalWatchComponent } from './legal-watch/legal-watch.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechWatchComponent } from './tech-watch/tech-watch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'bts-sio', component: BtsSioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tech-watch', component: TechWatchComponent },
  { path: 'legal-watch', component: LegalWatchComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
