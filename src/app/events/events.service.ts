import { Injectable } from '@angular/core';
import { Event } from 'app/events/event';
import { CurrencyService } from 'app/currency/currency.service';
import { SingleButtonEvent } from 'app/events/event';

@Injectable()
export class EventsService {

  private events: Event[] = [];

  constructor( public currency: CurrencyService )
  { 
    let self = this;
    this.events["free_click_0"] = <Event> new SingleButtonEvent( "free_click_0_reveal",
                                                                "free_click_0_name",
                                                                "free_click_0_description",
                                                                function():void { },
                                                                function():void { },
                                                                "free_click_0_button", 
                                                                function():void { self.currency.add(0,20); } );
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
