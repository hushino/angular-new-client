import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SerieComponent } from './components/serie/serie.component';
import { SerieByIdComponent } from './components/serie-by-id/serie-by-id.component';
import { EpisodeByIdComponent } from './components/episode-by-id/episode-by-id.component';
import { GenreByIdComponent } from './components/genre-by-id/genre-by-id.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CookieService } from "ngx-cookie-service";
import { interceptor } from './services/interceptor';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animes', component: SerieComponent },
  { path: 'animes/:id', component: SerieByIdComponent },
  { path: ':id/:id2', component: EpisodeByIdComponent },
  { path: 'tag/getAllAnimeByGenre/:id', component: GenreByIdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    SerieByIdComponent,
    EpisodeByIdComponent,
    GenreByIdComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
