import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// MY IMPORTS
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { MassonryComponent } from './components/shared/massonry/massonry.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DomYoutubePipe } from './pipes/dom-youtube.pipe';
import { MenosDataPipe } from './pipes/menos-data.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscarComponent,
    NoImagePipe,
    MassonryComponent,
    PeliculaComponent,
    DomYoutubePipe,
    MenosDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
