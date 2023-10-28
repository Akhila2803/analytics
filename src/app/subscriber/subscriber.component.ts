import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../subscriber.service';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  subscribers: Subscriber[] = [];
  selectedSubscriber: Subscriber | null = null;

  constructor(private subscriberService: SubscriberService) {}

  ngOnInit(): void {
    this.loadSubscribers();
  }

  loadSubscribers() {
    this.subscriberService.getAllSubscribers().subscribe((data: Subscriber[]) => {
      this.subscribers = data;
    });
  }
  
  showPlanDetails(subscriber: Subscriber) {
    this.selectedSubscriber = subscriber;
  }
}
