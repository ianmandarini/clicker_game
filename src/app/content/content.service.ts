import { Injectable } from '@angular/core';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';
import { EventsService } from 'app/events/events.service';
import { UpgradeService } from 'app/upgrade/upgrade.service';
import { Upgrade } from 'app/upgrade/upgrade';
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
    private events: EventsService,
    private upgrades: UpgradeService
  ) 
  { 
    this.initProgress();
    this.initEvents();
    this.initClickers();
    this.initCurrency();
    this.initUpgrades();
  }

  public initUpgrades()
  {
    let self = this;
    this.upgrades.addUpgrade(new Upgrade(this.currency,this.progress,'clicker_upgrade_0',0,150,
      function(): boolean {return self.progress.isActive("clicker_purchase");},
      function(): void {self.clickers.multiplyPower(0,2);}))
    this.upgrades.addUpgrade(new Upgrade(this.currency,this.progress,'clicker_upgrade_1',0,500,
      function(): boolean {return self.progress.isActive("clicker_purchase");},
      function(): void {self.clickers.multiplyPower(0,2.5);}))
    this.upgrades.addUpgrade(new Upgrade(this.currency,this.progress,'clicker_upgrade_2',0,1500,
      function(): boolean {return self.progress.isActive("clicker_purchase");},
      function(): void {self.clickers.multiplyPower(0,3);}))

    this.upgrades.addUpgrade(new Upgrade(this.currency,this.progress,'silver_tape_upgrade_0',0,750,
      function(): boolean {return self.progress.isActive("silver_tape_purchase");},
      function(): void {self.clickers.multiplyPower(1,2);}))
    this.upgrades.addUpgrade(new Upgrade(this.currency,this.progress,'silver_tape_upgrade_1',0,1500,
      function(): boolean {return self.progress.isActive("silver_tape_purchase");},
      function(): void {self.clickers.multiplyPower(1,3);}))
  }

  public initProgress()
  {
    let self = this;
    this.progress.addTrigger("button_pressed", new Trigger() );

    this.progress.addTrigger("clicker_panel_unlocked", new Trigger() );
    this.progress.addTrigger("events_feed_unlocked", new Trigger() );
    this.progress.addTrigger("upgrade_tab_unlocked", new Trigger() );
    this.progress.addTrigger("top_menu_unlocked", new Trigger() );

    this.progress.addCondition("events_feed_unlocked",
                            function(): boolean {return self.currency.hasEnough(0,10);});


    this.progress.addTrigger("10s_after_generic_clicker_purchase", new Trigger() );
    this.progress.addTrigger("10s_after_generic_upgrade_purchase", new Trigger() );
    
    this.progress.addTrigger("generic_clicker_purchase", new Trigger() );
    this.progress.addCallBack("generic_clicker_purchase",
                            function(): void {
                              setTimeout(()=>{self.progress.trigger("10s_after_generic_clicker_purchase")},10000);
                            });

    this.progress.addTrigger("generic_upgrade_purchase", new Trigger() );
    this.progress.addCallBack("generic_upgrade_purchase",
                            function(): void {
                              setTimeout(()=>{self.progress.trigger("10s_after_generic_upgrade_purchase")},10000);
                            });

  }

  public initEvents(): void
  {
    let self = this;
    this.events.addEvent(
      "events_feed_unlock_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.progress.isActive("events_feed_unlocked"); },
        "events_feed_unlock_event",
        function():void { },
        function():void { },
        function():void { self.currency.add(0,10); } 
        )
      );    
    this.events.addEvent(
      "top_menu_reveal_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.currency.hasEnough(0,30); },
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
        function(): boolean { return self.currency.hasEnough(0,40); },
        "save_notification_event",
        function():void { },
        function():void { },
        function():void { } 
        )
      );    
    this.events.addEvent(
      "annoying_notifications_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.currency.hasEnough(0,50); },
        "annoying_notifications_event",
        function():void { },
        function():void { },
        function():void { } 
        )
      );
    this.events.addEvent(
      "unlock_clickers_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.currency.hasEnough(0,70); },
        "unlock_clickers_event",
        function():void { },
        function():void { },
        function():void { self.progress.trigger("clicker_panel_unlocked"); } 
        )
      );    
    this.events.addEvent(
      "offline_notification_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean { return self.progress.isActive("10s_after_generic_clicker_purchase"); },
        "offline_notification_event",
        function():void { },
        function():void { },
        function():void { } 
        )
      );     
    this.events.addEvent(
      "free_click_0",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean {return self.clickers.xcount(0) == 5;},
        "free_click_0",
        function():void { },
        function():void { },
        function():void { self.currency.add(0,50); } 
        )
      );     
    this.events.addEvent(
      "unlock_upgrades_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean {return self.clickers.xcount(1) == 1;},
        "unlock_upgrades_event",
        function():void { },
        function():void { },
        function():void { self.progress.trigger("upgrade_tab_unlocked"); } 
        )
      );     
    this.events.addEvent(
      "upgrades_stack_event",
      <Event> new SingleButtonEvent( 
        this.progress,
        function(): boolean {return self.progress.isActive("10s_after_generic_upgrade_purchase");},
        "upgrades_stack_event",
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
      "silver_tape",
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
      120,
      150,
      2,
      0,
      250,
      1.15));
  }

}
