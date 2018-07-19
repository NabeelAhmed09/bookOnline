import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; // No_Error_schema is to tell compiler not to give error on mdb
import { FormsModule } from '@angular/forms';
//importing routing class having all routes seperately
import { AppRoutingModule } from './app-routing.module';
//animations for some materials components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//THIRD PARTY IMPORTS
import { CarouselModule, BsDatepickerModule, BsDropdownModule, TypeaheadModule  } from 'ngx-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; // importing material design bootstrap
import { WavesModule } from 'angular-bootstrap-md' // importing for card

//ANGULAR MATERIAL IMPORTS
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookingTabComponent } from './booking-tab/booking-tab.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    BookingTabComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    //ngx-bootstrap
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,TypeaheadModule.forRoot(),
    RouterModule.forRoot(
      [{
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
        {
        path:'home',
        component: HomeComponent
      },
      {
        path:'hotels',
        component: HotelsComponent
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'contact',
        component: ContactComponent
      }]),
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    //importing button module from material
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    WavesModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
