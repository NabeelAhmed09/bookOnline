import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importing components for routing 
import { HomeComponent }      from './home/home.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HotelDisplayComponent } from './hotel-display/hotel-display.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotels-list', component: HotelsListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hotel-display', component: HotelDisplayComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}