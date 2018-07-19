
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing components to set routing of them
import { HotelsComponent } from './hotels/hotels.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [  RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
