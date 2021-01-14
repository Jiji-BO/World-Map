import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordonneeComponent } from './coordonnee/coordonnee.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { PaysComponent } from './pays/pays.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  {​​​​​​​​ path:'',component:HomeComponent}​​​​​​​​,
  {​​​​​​​​ path:'home',component:HomeComponent}​​​​​​​​,
  {​​​​​​​​ path:'regions',component:RegionComponent}​​​​​​​​,
  {​​​​​​​​ path:'countries',component:PaysComponent}​​​​​​​​,
  {​​​​​​​​ path:'countries/:region',component:ListeComponent}​​​​​​​​,
  {​​​​​​​​ path:'country/:countrie',component:CoordonneeComponent}​​​​​​​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
