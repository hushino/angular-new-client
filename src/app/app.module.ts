import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SerieComponent } from './serie/serie.component';
import { SerieByIdComponent } from './serie-by-id/serie-by-id.component';
import { EpisodeByIdComponent } from './episode-by-id/episode-by-id.component';
import { GenreByIdComponent } from './genre-by-id/genre-by-id.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animes', component: SerieComponent },
  { path: 'animes/:id', component: SerieByIdComponent },
  { path: ':id/:id2', component: EpisodeByIdComponent },
  { path: 'tag/getAllAnimeByGenre/:id', component: GenreByIdComponent },
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
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
