import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events;
  constructor(private eventService: EventServiceService) { }
  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(
        events => this.events = events,
        error => console.log(error)
      );
  }

}
