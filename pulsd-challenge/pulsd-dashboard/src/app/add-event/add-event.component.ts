import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../event-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  private startDate: any;
  private endDate: any;
  event = {
    name: null,
    description: null,
    startDate: null,
    startTime: null,
    startTimeZone: null,
    endDate: null,
    endTime: null,
    endTimezone: null,
    currency: null
  };
  constructor(private eventService: EventServiceService) { }

  addEvent() {
    this.eventService.addEvent(this.event);
  }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.event.startDate = this.startDate;
    this.event.endDate = this.endDate;
  }

}
