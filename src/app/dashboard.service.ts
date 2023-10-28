import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private revenueUrl = 'http://localhost:8080/api/revenue'; // Replace with your API endpoint
  private totalUrl = 'http://localhost:8080/api/total';
  private prepaidUrl = 'http://localhost:8080/api/prepaid';
  private postpaidUrl = 'http://localhost:8080/api/postpaid';
  private preUrl="http://localhost:8080/api/prepaid-revenue";
  private postUrl="http://localhost:8080/api/postpaid-revenue";
  constructor(private http: HttpClient) {}

  getRevenue(): Observable<number> {
    return this.http.get<number>(this.revenueUrl);
  }

  getTotal():Observable<number>{
    return this.http.get<number>(this.totalUrl);
  }
  getPrepaid():Observable<number>{
    return this.http.get<number>(this.prepaidUrl);
  }
  getPostPaid():Observable<number>{
    return this.http.get<number>(this.postpaidUrl);
  }
  getTotalSubscribersByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
  getPrePaidSubscribersByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
  getPostPaidSubscribersByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
  getTotalRevenueByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
  getPrePaidRevenueByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
  getPostPaidRevenueByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
 
  getSubscriberCountByLocationAndPlanType(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }
 
  getPostRevenue():Observable<number>{
    return this.http.get<number>(this.postUrl);
  }
  getPreRevenue():Observable<number>{
    return this.http.get<number>(this.preUrl);
  }

  private dUrls='http://localhost:8080/api/prepaid';
    getPre(location:String){
      return this.http.get<any[]>(`${this.dUrls}/${location}`);
    }
  private consumedUrl="http://localhost:8080/api/total-consumed-data";
  getConsumedData(){
    return this.http.get<number>(this.consumedUrl);
  }


  private baseUrl = 'http://localhost:8080/api';


  getTotalPostpaidRevenue(selectedLocation: string): Observable<number> {
    const url = `${this.baseUrl}/total/postpaid/${selectedLocation}`;
    return this.http.get<number>(url);
  }

  getTotalPrepaidRevenue(selectedLocation: string): Observable<number> {
    const url = `${this.baseUrl}/total/prepaid/${selectedLocation}`;
    return this.http.get<number>(url);
  }

  getTotalPrepaidSubscribers(selectedLocation: string): Observable<number> {
    const url = `${this.baseUrl}/prepaid/${selectedLocation}`;
    return this.http.get<number>(url);
  }

  getTotalPostpaidSubscribers(selectedLocation: string): Observable<number> {
    const url = `${this.baseUrl}/postpaid/${selectedLocation}`;
    return this.http.get<number>(url);
  }
  private durationUrl = "http://localhost:8080/api/average-call-duration"
  getDuration():Observable<number>{
    return this.http.get<number>(this.durationUrl);
  }
}
