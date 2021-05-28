import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DraftsComponent } from './drafts/drafts.component';
import { ArticlesComponent } from './articles/articles.component';
import { FaqComponent } from './faq/faq.component';
import { ElectionsComponent } from './elections/elections.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { CitizenDutyDayComponent } from './citizen-duty-day/citizen-duty-day.component';
import { TheMovementComponent } from './the-movement/the-movement.component';
import { ThePartyComponent } from './the-party/the-party.component';
import { ThePresidentComponent } from './the-president/the-president.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DraftsComponent,
    ArticlesComponent,
    FaqComponent,
    ElectionsComponent,
    MeetingsComponent,
    CitizenDutyDayComponent,
    TheMovementComponent,
    ThePartyComponent,
    ThePresidentComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    SubHeaderComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
