import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: '',    redirectTo: '/heroes',    pathMatch: 'full'  },
/*   { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {    path: 'heroes',    component: HeroListComponent,    data: { title: 'Heroes List' }  },
    { path: '**', component: PageNotFoundComponent } */
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
