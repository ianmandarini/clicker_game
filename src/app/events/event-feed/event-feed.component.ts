import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/events/events.service';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.sass']
})
export class EventFeedComponent implements OnInit {

  constructor( public events: EventsService )
  { 
  }

  ngOnInit() {
  }

}
