import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CallHistoryService } from '../callhistory.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  phoneNumber: string = '';
  details: any[];
  text:any[];
  datas:any[];
  isLoading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient,private callHistoryService: CallHistoryService) {}

  getPhoneNumberDetails(phoneNumber : String) {
    this.isLoading = true;
    this.error = '';
    this.callHistoryService.getCalls(phoneNumber).subscribe((data: any[]) => {
      console.log(data);
      this.details= data;
    },
    (error) => {
      console.error('Error fetching call history:', error);
      this.error = 'Failed to fetch call history.';
    });
    this.callHistoryService.getTextHistory(phoneNumber).subscribe((data: any[]) => {
        console.log(data);
      this.text= data;
    },
    (error) => {
      console.error('Error fetching text history:', error);
      this.error = 'Failed to fetch text history.';
    });
    this.callHistoryService.getDataHistory(phoneNumber).subscribe((data: any[]) => {
      console.log(data);
      this.datas= data;
    },
    (error) => {
      console.error('Error fetching data history:', error);
      this.error = 'Failed to fetch data history.';
      this.isLoading = false;
    });

    
  }

}
