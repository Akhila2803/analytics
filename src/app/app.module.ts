import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { CallHistoryComponent } from './calls/calls.component';
import { CallHistoryFormComponent } from './call-history-form/call-history-form.component';
import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { TextComponent } from './text/text.component';
import { HistoryComponent } from './history/history.component';
import { DataComponent } from './data/data.component';
import { TopComponent } from './top/top.component';
import { ChartsComponent } from './charts/charts.component';
import { LineComponent } from './line/line.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinebarComponent } from './linebar/linebar.component';



Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlansComponent,
    LoginComponent,
    SubscriberComponent,
    DashboardComponent,
    PlanFormComponent,
    CallHistoryComponent,
    CallHistoryFormComponent,
    TextComponent,
    HistoryComponent,
    DataComponent,
    TopComponent,
    ChartsComponent,
    LineComponent,
    LinebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
