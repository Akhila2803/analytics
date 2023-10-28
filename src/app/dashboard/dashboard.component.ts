// // import { Component, OnInit } from '@angular/core';
// // import { DashboardService } from '../dashboard.service';
// // import { SubscriberService } from '../subscriber.service';
// // import { Chart, Colors} from 'chart.js';
// // import { forkJoin } from 'rxjs';
// // import { RouterTestingHarness } from '@angular/router/testing';

// // @Component({
// //   selector: 'app-dashboard',
// //   templateUrl: './dashboard.component.html',
// //   styleUrls: ['./dashboard.component.css']
// // })
// // export class DashboardComponent implements OnInit {
// //   totalRevenue: number;
// //   prepaidSubscribers: number;
// //   postpaidSubscribers: number;
// //   prepaidRevenue:number;
// //   postpaidRevenue:number;
// //   totalPreSubscribers:number;
// //   totalPostSubscribers:number;
// //   totalSubscribers: number;
// //   chartData: number[] = [];
// //   chartDataLabels: any[] = [];
// //   barData:number[]=[];
// //   barDataLabels:any[]=[];
// //   fetchData:number[]=[];
// //   fetchDataLabels:any[]=[];

// //   ctx: any;
// //   config: any;
// //   selectedLocation = 'Total';
// //   selectedPlanType="";
// //   totalLocationSubscribers: number;
// //   totalPlanSubscribers: number;
// //   ctxFetch:any;

// //   constructor(private dashboardService: DashboardService, private subscriberService: SubscriberService) {}

// //   ngOnInit(): void {
  
// //     forkJoin([
// //       this.dashboardService.getRevenue(),
// //       this.dashboardService.getTotal(),
// //       this.dashboardService.getPrepaid(),
// //       this.dashboardService.getPostPaid(),
// //       this.dashboardService.getPreRevenue(),
// //       this.dashboardService.getPostRevenue(),
// //       this.dashboardService.getPrepaidTotal(),
// //       this.dashboardService.getPostpaidTotal(),

      
// //     ]).subscribe(([revenue, total, prepaid, postpaid,prerevenue,postrevenue,pre,post]) => {
// //       this.totalRevenue = revenue;
// //       this.totalSubscribers = total;
// //       this.prepaidSubscribers = prepaid;
// //       this.postpaidSubscribers = postpaid;
// //       this.prepaidRevenue = prerevenue;
// //       this.postpaidRevenue = postrevenue;
// //       this.totalPreSubscribers=pre;
// //       this.totalPostSubscribers=post;

      
// //       this.pieChart();
// //       this.BarChart();
// //     });
// //   }

// //   pieChart() {
// //     this.chartData.push(this.prepaidSubscribers);
// //     this.chartData.push(this.postpaidSubscribers);

// //     this.chartDataLabels.push("Prepaid Subscribers");
// //     this.chartDataLabels.push("Postpaid Subscribers");

// //     this.ctx = document.getElementById("myChart");
// //     this.config = {
// //       type: 'pie',
// //       options: {},
// //       data: {
// //         labels: this.chartDataLabels,
// //         datasets: [
// //           {
// //             label: 'Subscribers',
// //             data: this.chartData,
// //             borderWidth: 2,
// //             borderColor: 'grey',
// //             backgroundColor: ['blue', 'red']
// //           }
// //         ]
// //       }
// //     };

// //     new Chart(this.ctx, this.config);
// //     console.log('Chart created successfully.');
// //   }

  

// //   BarChart(){
// //       this.barData.push(this.prepaidRevenue);
// //       this.barData.push(this.postpaidRevenue);
  
// //       this.barDataLabels.push("Prepaid Revenue");
// //       this.barDataLabels.push("Postpaid Revenue");
  
// //       this.ctx = document.getElementById("myBar");
// //       this.config = {
// //         type: 'bar',
// //         options: {},
// //         data: {
// //           labels: this.barDataLabels,
// //           datasets: [
// //             {
// //               label: 'revenue',
// //               data: this.barData,
// //               borderWidth: 2,
// //               borderColor: 'grey',
// //               backgroundColor: ['green', 'red']
// //             }
// //           ]
// //         }
// //       };
  
// //       new Chart(this.ctx, this.config);
// //       console.log('Chart created successfully.');
    

// //   }
  
// //   onLocationChange() {
// //     this.selectedLocation = this.selectedLocation.toUpperCase();
// //     const locationUrl = `http://localhost:8080/api/count/${this.selectedLocation}`;
// //     const preUrl = `http://localhost:8080/api/prepaid/${this.selectedLocation}`;
// //     const postUrl = `http://localhost:8080/api/postpaid/${this.selectedLocation}`;
// //     this.dashboardService.getTotalSubscribersByLocation(locationUrl).subscribe((response) => {
// //       this.totalLocationSubscribers = response;
// //     });
// //     this.dashboardService.getPrePaidSubscribersByLocation(preUrl).subscribe((response) => {
// //       this.totalPreSubscribers = response;
// //     });
// //     this.dashboardService.getPostPaidSubscribersByLocation(postUrl).subscribe((response) => {
// //       this.totalPostSubscribers = response;
// //     });
// //     this.fetchChart();
// //   }

// // //   fetchChart() {
// // //     this.fetchData.push(this.totalPreSubscribers);
// // //     this.fetchData.push(this.totalPostSubscribers);
  
// // //     this.fetchDataLabels.push("Prepaid Subscribers");
// // //     this.fetchDataLabels.push("Postpaid Subscribers");
  
// // //     // Check if the chart on 'myFetch' canvas already exists and destroy it
// // //     if (this.ctxFetch) {
// // //       this.ctxFetch.destroy();
// // //     }
  
// // //     this.ctxFetch = document.getElementById("myFetch"), {
// // //       type: 'pie',
// // //       options: {},
// // //       data: {
// // //         labels: this.fetchDataLabels,
// // //         datasets: [
// // //           {
// // //             label: 'Subscribers',
// // //             data: this.fetchData,
// // //             borderWidth: 2,
// // //             borderColor: 'grey',
// // //             backgroundColor: ['blue', 'red']
// // //           }
// // //         ]
// // //       }
// // //     };
// // //     new Chart(this.ctxFetch,this.config);
  
// // //     console.log('Fetch Chart created successfully.');
// // //   }
  
    
    
  
// // //   }
  
  
  


// // // // function fetchChart() {
// // // //   throw new Error('Function not implemented.');
// // // // }
 
// // fetchChart() {
// //   this.fetchData = []; // Clear the fetchData array to update it with new data
// //   this.fetchData.push(this.totalPreSubscribers);
// //   this.fetchData.push(this.totalPostSubscribers);

// //   this.fetchDataLabels = []; // Clear the fetchDataLabels array to update it with new labels
// //   this.fetchDataLabels.push("Total Prepaid Subscribers");
// //   this.fetchDataLabels.push("Total Postpaid Subscribers");

// //   // Check if the chart on 'myFetch' canvas already exists and destroy it
// //   if (this.ctxFetch) {
// //     this.ctxFetch.destroy();
// //   }

// //   this.ctxFetch = document.getElementById("myFetch"); // Assign the correct canvas element

// //   this.config = {
// //     type: 'pie',
// //     options: {},
// //     data: {
// //       labels: this.fetchDataLabels,
// //       datasets: [
// //         {
// //           label: 'Subscribers',
// //           data: this.fetchData,
// //           borderWidth: 2,
// //           borderColor: 'grey',
// //           backgroundColor: ['blue', 'red']
// //         }
// //       ]
// //     }
// //   };

// //   new Chart(this.ctxFetch, this.config);

// //   console.log('Fetch Chart created successfully with totalPreSubscribers and totalPostSubscribers.');
// // }

// // }

// import { Component, OnInit } from '@angular/core';
// import { DashboardService } from '../dashboard.service';
// import { SubscriberService } from '../subscriber.service';
// import { Chart, Colors} from 'chart.js';
// import { forkJoin } from 'rxjs';
// import { RouterTestingHarness } from '@angular/router/testing';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   totalRevenue: number;
//   prepaidSubscribers: number;
//   postpaidSubscribers: number;
//   prepaidRevenue: number;
//   postpaidRevenue: number;
//   totalPreSubscribers: number;
//   totalPostSubscribers: number;
//   totalSubscribers: number;
//   chartData: number[] = [];
//   chartDataLabels: any[] = [];
//   barData: number[] = [];
//   barDataLabels: any[] = [];
//   fetchData: number[] = [];
//   fetchDataLabels: any[] = [];

//   ctx: any;
//   config: any;
//   selectedLocation = 'Total';
//   selectedPlanType = '';
//   totalLocationSubscribers: number;
//   totalPlanSubscribers: number;
//   ctxFetch: any;
//   totalLocationRevenue:number;
//   totalPostRevenue:number;
//   totalPreRevenue:number;

//   constructor(private dashboardService: DashboardService) {}

//   ngOnInit(): void {
//     forkJoin([
//       this.dashboardService.getRevenue(),
//       this.dashboardService.getTotal(),
//       this.dashboardService.getPrepaid(),
//       this.dashboardService.getPostPaid(),
//       this.dashboardService.getPreRevenue(),
//       this.dashboardService.getPostRevenue(),
//     ]).subscribe(([revenue, total, prepaid, postpaid, prerevenue, postrevenue]) => {
//       this.totalRevenue = revenue;
//       this.totalSubscribers = total;
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

//   BarChart() {
//     this.barData.push(this.prepaidRevenue);
//     this.barData.push(this.postpaidRevenue);

//     this.barDataLabels.push("Prepaid Revenue");
//     this.barDataLabels.push("Postpaid Revenue");

//     this.ctx = document.getElementById("myBar");
//     this.config = {
//       type: 'bar',
//       options: {},
//       data: {
//         labels: this.barDataLabels,
//         datasets: [
//           {
//             label: 'revenue',
//             data: this.barData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['green', 'red']
//           }
//         ]
//       }
//     }

//     new Chart(this.ctx, this.config);
//     console.log('Chart created successfully.');
//   }

//   onLocationChange() {
//     this.selectedLocation = this.selectedLocation.toUpperCase();
//     const locationUrl = `http://localhost:8080/api/count/${this.selectedLocation}`;
//     const preUrl = `http://localhost:8080/api/prepaid/${this.selectedLocation}`;
//     const postUrl = `http://localhost:8080/api/postpaid/${this.selectedLocation}`;
//     const locationUrls = `http://localhost:8080/api/total/${this.selectedLocation}`;
//     const preUrls = `http://localhost:8080/api/total/prepaid/${this.selectedLocation}`;
//     const postUrls = `http://localhost:8080/api/total/postpaid/${this.selectedLocation}`;
//     this.dashboardService.getTotalSubscribersByLocation(locationUrl).subscribe((response) => {
//       this.totalLocationSubscribers = response;
//     });
//     this.dashboardService.getPrePaidSubscribersByLocation(preUrl).subscribe((response) => {
//       this.totalPreSubscribers = response;
//     });
//     this.dashboardService.getPostPaidSubscribersByLocation(postUrl).subscribe((response) => {
//       this.totalPostSubscribers = response;
//     });
//     this.dashboardService.getTotalRevenueByLocation(locationUrls).subscribe((response) => {
//       this.totalLocationRevenue = response;
//     });
//     this.dashboardService.getPrePaidRevenueByLocation(preUrls).subscribe((response) => {
//       this.totalPreRevenue = response;
//     });
//     this.dashboardService.getPostPaidRevenueByLocation(postUrls).subscribe((response) => {
//       this.totalPostRevenue = response;
//     });
//     this.fetchChart();
// }
// fetchChart(){

//   this.fetchData.push(this.totalPreSubscribers);
//     this.fetchData.push(this.totalPostSubscribers);

//     this.fetchDataLabels.push("Prepaid Subscribers");
//     this.fetchDataLabels.push("Postpaid Subscribers");

//     this.ctx = document.getElementById("myFetch");
//     this.config = {
//       type: 'pie',
//       options: {},
//       data: {
//         labels: this.fetchDataLabels,
//         datasets: [
//           {
//             label: 'Subscribers',
//             data: this.fetchData,
//             borderWidth: 2,
//             borderColor: 'grey',
//             backgroundColor: ['blue', 'red']
//           }
//         ]
//       }
//     };

//     new Chart(this.ctx, this.config);
//     console.log('Chart created successfully.');
// }
// }
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { SubscriberService } from '../subscriber.service';
import { Chart, Colors } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  

}