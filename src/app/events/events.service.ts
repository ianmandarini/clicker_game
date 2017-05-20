import { Injectable } from '@angular/core';
import { Event } from 'app/events/event';
import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';

@Injectable()
export class EventsService {

  private events: Event[] = [];

  constructor( public currency: CurrencyService, public progress: ProgressService )
  { 
  }

  public addEvent( event_tag: string, event: Event ):void
  {
    this.events[event_tag] = event;
  }

  public tagN( event_tag: string ): string
  {
    return this.events[event_tag].tagN();
  }

  public tagD( event_tag: string ): string
  {
    return this.events[event_tag].tagD();
  }

  public total(): number
  {
    return this.events.length;
  }

  public tags(): string[]
  {
    let array: string[] = [];    
    for(let tag in this.events)
    {
      array.push(tag);
    }
    return array;
  }

  public getActualEvent( event_tag: string ): Event
  {
    return this.events[event_tag];
  }

}
