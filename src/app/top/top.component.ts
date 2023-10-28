import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit{
  consumedData:number;
  totalSubscribers: number;
  totalRevenue: number;
  averagecallduration:number;
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
  this.dashboardService.getConsumedData().subscribe((data)=>{
    this.consumedData=data;
  });

  this.dashboardService.getTotal().subscribe((total) => {
    this.totalSubscribers = total;
  });
  

  this.dashboardService.getRevenue().subscribe((total) => {
    this.totalRevenue = total
  });
  this.dashboardService.getDuration().subscribe((total) => {
    this.averagecallduration = total
  });

  
}
}