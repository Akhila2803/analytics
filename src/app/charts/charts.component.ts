
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
      options:{
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set legend label text color to white
            },
          },
        },
      }
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
      options: {
        scales: {
          x: {
            ticks: {
              color: 'white', // Set x-axis label text color to white
            },
          },
          y:{
            ticks:{
              color: 'white',
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set legend label text color to white
            },
          },
        },
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
