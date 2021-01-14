import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegionComponent } from './region/region.component';
import { PaysComponent } from './pays/pays.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { CoordonneeComponent } from './coordonnee/coordonnee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RegionComponent,
    PaysComponent,
    ListeComponent,
    CoordonneeComponent
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
