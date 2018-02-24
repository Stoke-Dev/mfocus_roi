import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HelperBoxComponent } from './helper-box/helper-box.component';
import { FormsModule } from '@angular/forms';
import { MfClientDataService } from './mf-client-data.service';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { TooltipDataService } from './tooltip-data.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'savings', component: CalculatorComponent },
  { path: 'begin', component: QuestionnaireComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    QuestionnaireComponent,
    HelperBoxComponent,
    ChartsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    MfClientDataService,
    TooltipDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
