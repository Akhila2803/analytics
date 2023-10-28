import { Component, OnInit } from '@angular/core';
import { CallHistoryService } from '../callhistory.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css'],
})
export class CallHistoryComponent implements OnInit {
  callHistories: any[];

  constructor(private callHistoryService: CallHistoryService) {}

  ngOnInit() {
    this.callHistoryService.getCallHistories().subscribe((data: any) => {
      this.callHistories = data;
    });
  }
}
