import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private plansUrl = 'http://localhost:8080/api/plans';
    constructor(private http: HttpClient) {}
    getPlans(): Observable<Plan[]> {
      return this.http.get<Plan[]>(this.plansUrl);
    }
    private apiUrl = 'http://localhost:8080/api/add';
    addPlan(plan: any): Observable<any> {
    return this.http.post(this.apiUrl, plan);
  }
  
  updatePlan(updatedPlan: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${this.plansUrl}/${updatedPlan.id}`, updatedPlan);
  }
  
  }
