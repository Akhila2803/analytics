// import { Component, OnInit } from '@angular/core';
// import { DashboardService } from '../dashboard.service';
// import { SubscriberService } from '../subscriber.service';
// import { Chart, Colors} from 'chart.js';
// import { forkJoin } from 'rxjs';
// import { RouterTestingHarness } from '@angular/router/testing';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.css']
// })
// export class ChartsComponent implements OnInit{

//   totalRevenue: number;
//   prepaidRevenue:number;
//   postpaidRevenue:number;

//   prepaidSubscribers: number;
//   postpaidSubscribers: number;
//   totalSubscribers: number;

//   chartData: number[] = [];
//   chartDataLabels: any[] = [];
//   barData:number[]=[];
//   barDataLabels:any[]=[];
  
//   ctx: any;
//   config: any;
//   selectedLocation = '';
  

//   constructor(private dashboardService: DashboardService) {}

//   ngOnInit(): void {
  
//     forkJoin([
//       this.dashboardService.getPrepaid(),
//       this.dashboardService.getPostPaid(),
//       this.dashboardService.getPreRevenue(),
//       this.dashboardService.getPostRevenue(),
     
      
//     ]).subscribe(([prepaid, postpaid,prerevenue,postrevenue]) => {
//       this.prepaidSubscribers = prepaid;
//       this.postpaidSubscribers = postpaid;
//       this.prepaidRevenue = prerevenue;
//       this.postpaidRevenue = postrevenue;

      
//       this.pieChart();
//       this.BarChart();
//     });
//   }

//   pieChart() {
//     this.chartData.push(this.prepaidSubscribers);
//     this.chartData.push(this.postpaidSubscribers);

//     this.chartDataLabels.push("Prepaid Subscribers");
//     this.chartDataLabels.push("Postpaid Subscribers");

//     this.ctx = document.getElementById("myChart");
//     this.config = {
//       type: 'pie',
//       options: {},
//       data: {
//         labels: this.chartDataLabels,
//         datasets: [
//           {
//             label: 'Subscribers',
//             data: this.chartData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['blue', 'red']
//           }
//         ]
//       }
//     };

//     new Chart(this.ctx, this.config);
//     console.log('Chart created successfully.');
//   }

  

//   BarChart(){
//       this.barData.push(this.prepaidRevenue);
//       this.barData.push(this.postpaidRevenue);
  
//       this.barDataLabels.push("Prepaid Revenue");
//       this.barDataLabels.push("Postpaid Revenue");
  
//       this.ctx = document.getElementById("myBar");
//       this.config = {
//         type: 'bar',
//         options: {},
//         data: {
//           labels: this.barDataLabels,
//           datasets: [
//             {
//               label: 'revenue',
//               data: this.barData,
//               borderWidth: 2,
//               borderColor: 'grey',
//               backgroundColor: ['green', 'red']
//             }
//           ]
//         }
//       };
  
//       new Chart(this.ctx, this.config);
//       console.log('Chart created successfully.');
    

//   }
  
//   onLocationChange() {
//     this.selectedLocation = this.selectedLocation.toUpperCase();
    
//   }
//   }
// import { Component, OnInit } from '@angular/core';
// import { DashboardService } from '../dashboard.service';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: './charts.component.css'
// })
// @Component({
//     selector: 'app-charts',
//     templateUrl: './charts.component.html',
//     styleUrls: ['./charts.component.css']
//   })
// export class ChartsComponent implements OnInit {
//   totalRevenue: number;
//   prepaidRevenue: number;
//   postpaidRevenue: number;
//   prepaidSubscribers: number;
//   postpaidSubscribers: number;
//   totalSubscribers: number;

//   chartData: number[] = [];
//   chartDataLabels: any[] = [];
//   barData: number[] = [];
//   barDataLabels: any[] = [];

//   ctx: any;
//   config: any;
//   selectedLocation = '';

//   constructor(private dashboardService: DashboardService) {}

//   ngOnInit(): void {
//     this.updateCharts(); // Initial chart rendering with default data
//   }

//   updateCharts() {
//     // Fetch data based on selected location
//     this.selectedLocation=this.selectedLocation.toUpperCase();
//     this.dashboardService.getTotalPrepaidRevenue(this.selectedLocation).subscribe((prepaidRevenue) => {
//       this.prepaidRevenue = prepaidRevenue;
//       this.updateBarChart();
//     });

//     this.dashboardService.getTotalPostpaidRevenue(this.selectedLocation).subscribe((postpaidRevenue) => {
//       this.postpaidRevenue = postpaidRevenue;
//       this.updateBarChart();
//     });

//     this.dashboardService.getTotalPrepaidSubscribers(this.selectedLocation).subscribe((prepaidSubscribers) => {
//       this.prepaidSubscribers = prepaidSubscribers;
//       this.updatePieChart();
//     });

//     this.dashboardService.getTotalPostpaidSubscribers(this.selectedLocation).subscribe((postpaidSubscribers) => {
//       this.postpaidSubscribers = postpaidSubscribers;
//       this.updatePieChart();
//     });

//     // Example: Update bar chart (you can customize this as needed)
//     // this.barData = [this.prepaidRevenue, this.postpaidRevenue];
//     // this.barDataLabels = ['Prepaid Revenue', 'Postpaid Revenue'];
//     // this.updateBarChart();
//   }

//   updatePieChart() {
//     // Update the pie chart with the current data.
//     this.chartData = [this.prepaidSubscribers, this.postpaidSubscribers];
//     this.chartDataLabels = ['Prepaid Subscribers', 'Postpaid Subscribers'];

//     this.ctx = document.getElementById('myChart');
//     this.config = {
//       type: 'pie',
//       options: {},
//       data: {
//         labels: this.chartDataLabels,
//         datasets: [
//           {
//             label: 'Subscribers',
//             data: this.chartData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['blue', 'red']
//           }
//         ]
//       }
//     };

//     new Chart(this.ctx, this.config);
//   }

//   updateBarChart() {
//     // Update the bar chart with the current data.
//     this.chartData = [this.prepaidRevenue, this.postpaidRevenue];
//     this.chartDataLabels = ['Prepaid Revenue', 'Postpaid Revenue'];
//     this.ctx = document.getElementById('myBar');
//     this.config = {
//       type: 'bar',
//       options: {},
//       data: {
//         labels: this.barDataLabels,
//         datasets: [
//           {
//             label: 'Revenue',
//             data: this.barData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['green', 'red']
//           }
//         ]
//       }
//     };

//     new Chart(this.ctx, this.config);
//   }

//   onLocationChange() {
    
//     this.updateCharts();
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { DashboardService } from '../dashboard.service';
// import { Chart, ChartConfiguration, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.css']
// })
// export class ChartsComponent implements OnInit {
//   totalRevenue: number;
//   prepaidRevenue: number;
//   postpaidRevenue: number;
//   prepaidSubscribers: number;
//   postpaidSubscribers: number;
//   totalSubscribers: number;
  
//   chartData: number[] = [];
//   chartDataLabels: any[] = [];
//   barData: number[] = [];
//   barDataLabels: any[] = [];

//   ctx: any;
//   config: ChartConfiguration;
//   selectedLocation = 'TOTAL';

//   private pieChart: Chart;
//   private barChart: Chart;

//   constructor(private dashboardService: DashboardService) {}

//   ngOnInit(): void {
//     this.updateCharts();
//   }

//   updateCharts() {
//     this.selectedLocation = this.selectedLocation.toUpperCase();

//     this.dashboardService.getTotalPrepaidRevenue(this.selectedLocation).subscribe((prepaidRevenue) => {
//       this.prepaidRevenue = prepaidRevenue;
//       this.updateBarChart();
//     });

//     this.dashboardService.getTotalPostpaidRevenue(this.selectedLocation).subscribe((postpaidRevenue) => {
//       this.postpaidRevenue = postpaidRevenue;
//       this.updateBarChart();
//     });
    
//     this.dashboardService.getTotalPrepaidSubscribers(this.selectedLocation).subscribe((prepaidSubscribers) => {
//       this.prepaidSubscribers = prepaidSubscribers;
//       this.updatePieChart();
//     });

//     this.dashboardService.getTotalPostpaidSubscribers(this.selectedLocation).subscribe((postpaidSubscribers) => {
//       this.postpaidSubscribers = postpaidSubscribers;
//       this.updatePieChart();
//     });
//   }
//   updatePieChart() {
//     this.chartData = [this.prepaidSubscribers, this.postpaidSubscribers];
//     this.chartDataLabels = ['Prepaid Subscribers', 'Postpaid Subscribers'];
  
//     // If a pie chart already exists, destroy it before creating a new one.
//     if (this.pieChart) {
//       this.pieChart.destroy();
//     }
  
//     this.ctx = document.getElementById('myChart');
//     this.config = {
//       type: 'pie' as ChartType,
//       data: {
//         labels: this.chartDataLabels,
//         datasets: [
//           {
//             label: 'Subscribers',
//             data: this.chartData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['blue', 'red']
//           }
//         ]
//       }
//     };
  
//     this.pieChart = new Chart(this.ctx, this.config);
//   }
  

//   updateBarChart() {
    

//     this.barData = [this.prepaidRevenue, this.postpaidRevenue];
//     this.barDataLabels = ['Prepaid Revenue', 'Postpaid Revenue'];
//     if (this.barChart) {
//       this.barChart.destroy();
//     }

//     this.ctx = document.getElementById('myBar');
//     this.config = {
//       type: 'bar' as ChartType,
//       data: {
//         labels: this.barDataLabels,
//         datasets: [
//           {
//             label: 'Revenue',
//             data: this.barData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['green', 'red']
//           }
//         ]
//       }
//     };

//     this.barChart = new Chart(this.ctx, this.config);
//   }

//   onLocationChange() {
//     this.updateCharts();
// }
// }
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  totalRevenue: number;
  prepaidRevenue: number;
  postpaidRevenue: number;
  prepaidSubscribers: number;
  postpaidSubscribers: number;
  totalSubscribers: number;

  chartData: number[] = [];
  chartDataLabels: any[] = [];
  barData: number[] = [];
  barDataLabels: any[] = [];

  ctx: any;
  config: ChartConfiguration;
  selectedLocation = 'TOTAL';

  private pieChart: Chart;
  private barChart: Chart;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.updateCharts();
  }

  updateCharts() {
    this.selectedLocation = this.selectedLocation.toUpperCase();

    this.dashboardService.getTotalPrepaidRevenue(this.selectedLocation).subscribe((prepaidRevenue) => {
      this.prepaidRevenue = prepaidRevenue;
      this.updateBarChart();
    });

    this.dashboardService.getTotalPostpaidRevenue(this.selectedLocation).subscribe((postpaidRevenue) => {
      this.postpaidRevenue = postpaidRevenue;
      this.updateBarChart();
    });

    this.dashboardService.getTotalPrepaidSubscribers(this.selectedLocation).subscribe((prepaidSubscribers) => {
      this.prepaidSubscribers = prepaidSubscribers;
      this.updatePieChart();
      this.calculateTotalValues(); // Calculate and update the total values
    });

    this.dashboardService.getTotalPostpaidSubscribers(this.selectedLocation).subscribe((postpaidSubscribers) => {
      this.postpaidSubscribers = postpaidSubscribers;
      this.updatePieChart();
      this.calculateTotalValues(); // Calculate and update the total values
    });
  }

  updatePieChart() {
    this.chartData = [this.prepaidSubscribers, this.postpaidSubscribers];
    this.chartDataLabels = ['Prepaid Subscribers', 'Postpaid Subscribers'];

    if (this.pieChart) {
      this.pieChart.destroy();
    }

    this.ctx = document.getElementById('myChart');
    this.config = {
      type: 'pie' as ChartType,
      data: {
        labels: this.chartDataLabels,
        datasets: [
          {
            label: 'Subscribers',
            data: this.chartData,
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: ['blue', 'red'],
          },
        ],
      },
    };

    this.pieChart = new Chart(this.ctx, this.config);
  }

  updateBarChart() {
    this.barData = [this.prepaidRevenue, this.postpaidRevenue];
    this.barDataLabels = ['Prepaid Revenue', 'Postpaid Revenue'];

    if (this.barChart) {
      this.barChart.destroy();
    }

    this.ctx = document.getElementById('myBar');
    this.config = {
      type: 'bar' as ChartType,
      data: {
        labels: this.barDataLabels,
        datasets: [
          {
            label: 'Revenue',
            data: this.barData,
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: ['green', 'red'],
          },
        ],
      },
    };

    this.barChart = new Chart(this.ctx, this.config);
  }

  calculateTotalValues() {
    this.totalRevenue = this.prepaidRevenue + this.postpaidRevenue;
    this.totalSubscribers = this.prepaidSubscribers + this.postpaidSubscribers;
  }

  onLocationChange() {
    this.updateCharts();
  }
}
