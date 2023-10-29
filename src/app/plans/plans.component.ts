import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  selectedPlanType: string;
  plans: any[];
  selectedPlan: any;
  planService: any;

  constructor(private http: HttpClient) {}

  getPlans(planType: string) {
    const uppercasePlanType = planType.toUpperCase();
    this.selectedPlanType = planType;

    this.http.get(`http://localhost:8080/api/plans/${uppercasePlanType}`).subscribe((data: any) => {
      this.plans = data;
      this.selectedPlan = null; // Reset the selectedPlan when fetching new plans.
    });
  }

  showPlanDetails(plan: any) {
    this.selectedPlan = plan;
  }

  toggleDetails(plan: any) {
    if (this.selectedPlan === plan) {
      this.selectedPlan = null; // Close the details if they are already open
    } else {
      this.selectedPlan = plan;
    }
  }

}
