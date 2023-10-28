import { Component } from '@angular/core';
import { CallHistoryService } from '../callhistory.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  
    text: any[];
  
    constructor(private callHistoryService: CallHistoryService) {}
  
    ngOnInit() {
      this.callHistoryService.getText().subscribe((data: any) => {
        this.text = data;
      });
    }

}
