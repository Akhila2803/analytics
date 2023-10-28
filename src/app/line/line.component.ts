
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  chartData: { [planName: string]: number } = {};

  


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    this.http.get('http://localhost:8080/api/countByPlanName').subscribe((data: any) => {
      this.chartData = data;
      this.drawChart();
    });
    
    
  }

  drawChart(): void {
    const planNames = Object.keys(this.chartData);
    const subscriberCounts = planNames.map((planName) => this.chartData[planName]);

    const ctx = document.getElementById('subscriberChart') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: planNames,
        datasets: [
          {
            label: 'Subscriber Count',
            data: subscriberCounts,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white', // Use the array of colors
            },
          },
          x: {
            ticks: {
              color: 'white', // Use the array of colors
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'white',
            },
          },
        },
      },
    });
  }
}
