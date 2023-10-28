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
 

  constructor(private http: HttpClient,private callHistoryService: CallHistoryService) {}

  getPhoneNumberDetails(phoneNumber : String) {
    this.callHistoryService.getCalls(phoneNumber).subscribe((data: any[]) => {
      console.log(data);
      this.details= data;
    });
    this.callHistoryService.getTextHistory(phoneNumber).subscribe((data: any[]) => {
      console.log(data);
      this.text= data;
    });
    this.callHistoryService.getDataHistory(phoneNumber).subscribe((data: any[]) => {
      console.log(data);
      this.datas= data;
    });

    
  }


}
