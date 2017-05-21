import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/events/events.service';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';
import { LanguageService } from 'app/language/language.service';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.sass']
})
export class EventFeedComponent implements OnInit {

  private events_feed_price: number = 20;
  private events_feed_currency: number = 0;

  constructor(public events: EventsService,
              public progress: ProgressService,
              public currency: CurrencyService,
              public lang: LanguageService)
  { 
  }

  ngOnInit() {
  }

  canPurchase(): boolean
  {
    return this.currency.hasEnough(this.events_feed_currency,this.events_feed_price);
  }

  purchase(): void
  {
    if(this.canPurchase())
    {
      this.currency.add(this.events_feed_currency,(-1)*this.events_feed_price);
      this.progress.trigger("events_feed_purchase");    
    }
  }

  currencyTagP(): string
  {
    return this.currency.tagP(this.events_feed_currency);
  }

  xcost(): number
  {
    return Math.floor(this.events_feed_price);
  }
}
