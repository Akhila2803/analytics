
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from './subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private baseUrl = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllSubscribers(): Observable<Subscriber[]> {
    const url = `${this.baseUrl}/api/all`;
    return this.http.get<Subscriber[]>(url);
  }
  addCallHistory(callData: any) {
    return this.http.post(`${this.baseUrl}/api/calladd`, callData);
  }
  getSubscribersByLocation(location: string) {
    const url = `http://localhost:8080/api/count?location=${location}`;
    return this.http.get(url);
  }

  getTotalSubscribersByLocation(locationUrl: string): Observable<number> {
    return this.http.get<number>(locationUrl);
  }

}
