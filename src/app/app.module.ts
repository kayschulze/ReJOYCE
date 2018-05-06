import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HistoryComponent } from './history/history.component';
import { MissionComponent } from './mission/mission.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AboutUsComponent,
    ClinicsComponent,
    ContactUsComponent,
    HistoryComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
