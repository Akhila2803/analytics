import { Component } from '@angular/core';
import { CallHistoryService } from '../callhistory.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  data: any[];

  constructor(private callHistoryService: CallHistoryService) {}

  ngOnInit() {
    this.callHistoryService.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

}
