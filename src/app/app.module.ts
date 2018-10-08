import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerieComponent } from './serie/serie.component';
import { SerieByIdComponent } from './serie-by-id/serie-by-id.component';
import { EpisodeByIdComponent } from './episode-by-id/episode-by-id.component';
import { GenreByIdComponent } from './genre-by-id/genre-by-id.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
 
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
