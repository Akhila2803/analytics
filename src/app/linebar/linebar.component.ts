// import { Component, OnInit } from '@angular/core';
// import { CallHistoryService } from '../callhistory.service';
// import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-linebar',
//   templateUrl: './linebar.component.html',
//   styleUrls: ['./linebar.component.scss']
// })
// export class LinebarComponent implements OnInit {
//   public combinationChartData: any;

//   constructor(private callHistoryService: CallHistoryService) {}

//   ngOnInit() {
//     this.callHistoryService.getTextCounts().subscribe(textData => {
//       this.callHistoryService.getCallCounts().subscribe(callData => {
//         this.combinationChartData = {
          
//           datasets: [
//             {
//               label: 'Text Counts',
//               data: textData,
//               type: 'bar'
              
//             },
//             {
//               label: 'Call Counts',
//               data: callData,
//               type: 'line'
//             }
//           ]
          
//         };
//       });
//     });
//   }
//   }





// import { Component, OnInit } from '@angular/core';
// import { CallHistoryService } from '../callhistory.service';
// import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-linebar',
//   templateUrl: './linebar.component.html',
//   styleUrls: ['./linebar.component.scss'],
// })
// export class LinebarComponent implements OnInit {
//   public combinationChartData: any;

//   constructor(private callHistoryService: CallHistoryService) {}

//   ngOnInit() {
//     this.callHistoryService.getTextCounts().subscribe(textData => {
//       this.callHistoryService.getCallCounts().subscribe(callData => {
//         this.combinationChartData = {
//           datasets: [
//             {
//               label: 'Text Counts',
//               data: textData,
//               type: 'bar',
//             },
//             {
//               label: 'Call Counts',
//               data: callData,
//               type: 'line',
//             }
//           ]
//         };
//       });
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CallHistoryService } from '../callhistory.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-linebar',
  templateUrl: './linebar.component.html',
  styleUrls: ['./linebar.component.scss'],
})
export class LinebarComponent implements OnInit {
  public combinationChartData: any;

  constructor(private callHistoryService: CallHistoryService) {}

  ngOnInit() {
    this.callHistoryService.getTextCounts().subscribe(textData => {
      this.callHistoryService.getCallCounts().subscribe(callData => {
        this.combinationChartData = {
          datasets: [
            {
              label: 'Text Counts',
              data: textData,
              type: 'bar',
            },
            {
              label: 'Call Counts',
              data: callData,
              type: 'line',
            }
          ]
        };
      });
    });
  }
  
  public linebarChartOptions: ChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };
}
