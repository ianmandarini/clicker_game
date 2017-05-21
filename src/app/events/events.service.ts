import { Injectable } from '@angular/core';
import { Event } from 'app/events/event';
import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';
import { Savable } from 'app/save/savable';

@Injectable()
export class EventsService implements Savable {

  private events: {[label: string]: Event} = {};

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

  public tags(): string[]
  {
    let array: string[] = [];    
    for(let tag in this.events)
    {
      array.push(tag);
    }
    return array;
  }

  public numShownEvents(): number
  {
    let num = 0;   
    for(let tag in this.events)
    {
      let actual_event = this.getActualEvent(tag);
      if(this.progress.isActive(actual_event.tagR()) && !this.progress.isActive(actual_event.tagDone()))
      {
        num += 1;
      }
    }
    return num;
  }

  public getActualEvent( event_tag: string ): Event
  {
    return this.events[event_tag];
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
  }

  public clearState(): void
  {
  }
}
