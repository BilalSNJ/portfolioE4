import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { BtsSioComponent } from './bts-sio/bts-sio.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechWatchComponent } from './tech-watch/tech-watch.component';
import { LegalWatchComponent } from './legal-watch/legal-watch.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntrepriseComponent,
    BtsSioComponent,
    ProjectsComponent,
    TechWatchComponent,
    LegalWatchComponent,
    ContactComponent,
    NavbarComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
