import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from 'app/events/events.service';
import { LanguageService } from 'app/language/language.service';
import { ProgressService } from 'app/progress/progress.service';
import { Event, SingleButtonEvent } from 'app/events/event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  public Event; 
  public SingleButtonEvent;

  public actual_event: Event;
  public is_closed: boolean = false;

  @Input("eventTag") public eventTag: string;

  constructor(  public events: EventsService,
                public lang: LanguageService,
                public progress: ProgressService ) 
  { 
    this.Event = Event;
    this.SingleButtonEvent = SingleButtonEvent;
  }

  ngOnInit() {
    this.actual_event = this.events.getActualEvent(this.eventTag);
    this.actual_event.activate();
  }

  onClose(): void
  {
    this.is_closed = true;
    this.actual_event.close();
  }

  isSingleButtonEvent(): boolean
  {
    return this.actual_event.constructor.name === this.SingleButtonEvent.name;
  }

}
