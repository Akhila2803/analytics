import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallHistory } from './subscriber';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallHistoryService {
  private apiUrl = 'http://localhost:8080/api/add/call';

  constructor(private http: HttpClient) {}

  createCallHistory(callHistory: CallHistory) {
    return this.http.post(this.apiUrl, callHistory);
  }
    private callUrl = 'http://localhost:8080/api/withdurations';
    getCallHistories() {
      return this.http.get(this.callUrl);
    }

    private textUrl='http://localhost:8080/api/text';
    getText(){
      return this.http.get(this.textUrl);
    }
    private dataUrl='http://localhost:8080/api/data';
    getData(){
      return this.http.get(this.dataUrl);
    }
    private dataUrls='http://localhost:8080/api/calls';
    getCalls(phoneNumber:String){
      return this.http.get<any[]>(`${this.dataUrls}/${phoneNumber}`);
    }
    private daUrls='http://localhost:8080/api/text';
    getTextHistory(phoneNumber:String){
      return this.http.get<any[]>(`${this.daUrls}/${phoneNumber}`);
    }
    private dUrls='http://localhost:8080/api/data';
    getDataHistory(phoneNumber:String){
      return this.http.get<any[]>(`${this.dUrls}/${phoneNumber}`);
    }

    getCallData(): Observable<any> {
      // Replace 'your-backend-api-endpoint' with the actual endpoint that provides your data.
      return this.http.get('http:localhost:8080/api/count-calls-in-intervals');
    }

    getTextCounts(): Observable<number[]> {
      return this.http.get<number[]>('http://localhost:8080/api/count-texts-in-intervals');
    }
  
    getCallCounts(): Observable<number[]> {
      return this.http.get<number[]>('http://localhost:8080/api/count-calls-in-intervals');
    }
  }
  
  
