import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CitizenDutyDayComponent } from './citizen-duty-day/citizen-duty-day.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DraftsComponent } from './drafts/drafts.component';
import { ElectionsComponent } from './elections/elections.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TheMovementComponent } from './the-movement/the-movement.component';
import { ThePartyComponent } from './the-party/the-party.component';
import { ThePresidentComponent } from './the-president/the-president.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'drafts', component: DraftsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'elections', component: ElectionsComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'citizen-duty-day', component: CitizenDutyDayComponent },
  { path: 'the-movement', component: TheMovementComponent },
  { path: 'the-party', component: ThePartyComponent },
  { path: 'the-president', component: ThePresidentComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DraftsComponent, ArticlesComponent, FaqComponent, 
  ElectionsComponent, MeetingsComponent, CitizenDutyDayComponent, TheMovementComponent, ThePartyComponent, 
  ThePresidentComponent, ContactUsComponent, PageNotFoundComponent]