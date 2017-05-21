import { Injectable } from '@angular/core';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';
import { EventsService } from 'app/events/events.service';
import { Clicker } from 'app/clickers/clicker';
import { Currency } from 'app/currency/currency';
import { Event, SingleButtonEvent } from 'app/events/event';
import { Trigger } from 'app/progress/trigger';

@Injectable()
export class ContentService {

  constructor(
    private progress: ProgressService,
    private currency: CurrencyService,
    private clickers: ClickerService,
    private events: EventsService
  ) 
  { 
    this.initProgress();
    this.initEvents();
    this.initClickers();
    this.initCurrency();
  }

  public initProgress()
  {
    let self = this;
    this.progress.addTrigger("button_pressed", new Trigger() );
    this.progress.addTrigger("generic_clicker_purchase", new Trigger() );

    this.progress.addTrigger("clicker_panel_unlocked", new Trigger() );
    this.progress.addTrigger("clicker_panel_purchase", new Trigger() );

    this.progress.addTrigger("events_feed_unlocked", new Trigger() );
    this.progress.addTrigger("events_feed_purchase", new Trigger() );

    this.progress.addCondition("clicker_panel_unlocked",
                            function(): boolean {return self.currency.hasEnough(0,5);});
    this.progress.addCondition("events_feed_unlocked",
                            function(): boolean {return self.currency.hasEnough(0,5);});

    this.progress.addTrigger("top_menu_unlocked", new Trigger() );
  }

  public initEvents(): void
  {
    let self = this;
    this.events.addEvent(
      "free_click_0",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean {return self.clickers.xcount(0) == 3;},
        "free_click_0",
        function():void { },
        function():void { },
        function():void { self.currency.add(0,50); } 
        )
      );    
    this.events.addEvent(
      "top_menu_reveal_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.progress.isActive("events_feed_unlocked"); },
        "top_menu_reveal_event",
        function():void { },
        function():void { },
        function():void { self.progress.trigger("top_menu_unlocked"); } 
        )
      );    
    this.events.addEvent(
      "save_notification_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.progress.isActive("events_feed_unlocked"); },
        "save_notification_event",
        function():void { },
        function():void { },
        function():void { } 
        )
      );    
    this.events.addEvent(
      "offline_notification_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.progress.isActive("generic_clicker_purchase"); },
        "offline_notification_event",
        function():void { },
        function():void { },
        function():void { } 
        )
      );  
  }

  public initCurrency(): void
  {
    this.currency.addCurrency(new Currency("click"));
  }

  public initClickers(): void
  {
    this.clickers.addClicker(new Clicker(
      this.currency,
      this.progress,
      "clicker",
      0,        // reveal
      0,        // reveal_cost
      0,        // reveal_name
      0.1,      // power
      0,        // currency
      15,       // cost
      1.15));   // cost_multiplier

      this.clickers.addClicker(new Clicker(
      this.currency,
      this.progress,
      "drinking_bird",
      0,
      30,
      50,
      1,
      0,
      100,
      1.15));

    this.clickers.addClicker(new Clicker(
      this.currency,
      this.progress,
      "intern",
      100,
      200,
      550,
      2,
      0,
      1100,
      1.15));
  }

}
