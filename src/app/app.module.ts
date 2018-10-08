import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimeByIdComponent } from './anime-by-id/anime-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeByIdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
