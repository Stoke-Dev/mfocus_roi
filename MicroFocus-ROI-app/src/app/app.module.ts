import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const appRoutes: Routes = [
  { path: '',    redirectTo: '/home',    pathMatch: 'full'  },
  { path: 'home', component: HomeComponent,    data: { title: 'Heroes List' }  },
  { path: 'about', component: AboutComponent },
  { path: 'calculator', component: CalculatorComponent }
/*   { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  ,
    { path: '**', component: PageNotFoundComponent } */
];


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    CalculatorComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    QuestionnaireComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
