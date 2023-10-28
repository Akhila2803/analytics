import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallHistoryFormComponent } from './call-history-form/call-history-form.component';
import { CallHistoryComponent } from './calls/calls.component';
import { TextComponent } from './text/text.component';
import { HistoryComponent } from './history/history.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: 'plans', component: PlansComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path: 'subscribers',component: SubscriberComponent},
  {path: 'planform', component: PlanFormComponent},
  {path:'callform', component: CallHistoryFormComponent},
  {path:'calls', component: CallHistoryComponent},
  {path:'text',component:TextComponent},
  {path:'history',component:HistoryComponent},
  {path:'data',component:DataComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
