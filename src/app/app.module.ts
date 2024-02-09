import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SliderComponent } from './common/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { VidPlayerComponent } from './common/vid-player/vid-player.component';
import { AudPlayerComponent } from './common/aud-player/aud-player.component';
import { BookNowComponent } from './common/book-now/book-now.component';
import { ThumbnailerComponent } from './common/thumbnailer/thumbnailer.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    VidPlayerComponent,
    AudPlayerComponent,
    BookNowComponent,
    ThumbnailerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    YouTubePlayerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
