import { Injectable } from '@angular/core';
import { Trigger } from 'app/progress/trigger'
import { CurrencyService } from 'app/currency/currency.service';

@Injectable()
export class ProgressService {

  private triggers: Trigger[] = [];

  constructor(private currencyService: CurrencyService) { 
    this.triggers["button_pressed"] = (new Trigger());
    this.triggers["generic_clicker_purchase"] = (new Trigger());

    this.triggers["clicker_reveal"] = (new Trigger());
    this.triggers["clicker_reveal_cost"] = (new Trigger());
    this.triggers["clicker_reveal_name"] = (new Trigger());
    this.triggers["clicker_purchase"] = (new Trigger());

    this.triggers["intern_reveal"] = (new Trigger());
    this.triggers["intern_reveal_cost"] = (new Trigger());
    this.triggers["intern_reveal_name"] = (new Trigger());
    this.triggers["intern_purchase"] = (new Trigger());

    this.triggers["clicker_panel_unlocked"] = (new Trigger());
    this.triggers["clicker_panel_purchase"] = (new Trigger());

    this.triggers["free_click_0_reveal"] = (new Trigger());
  }

  trigger(trigger_label: string): void
  {
    this.triggers[trigger_label].activate();
  }

  isActive(trigger_label: string): boolean
  {
    return this.triggers[trigger_label].isActive();
  }

  public addCallBack(trigger_label: string, callback_function: { (): void; }): void
  {
    this.triggers[trigger_label].addCallBack(callback_function);
  }

  public addCondition(trigger_label: string, condition_function: { (): boolean; }): void
  {
    this.triggers[trigger_label].addCondition(condition_function);
  }

  public tick(): void
  {
    for(let key in this.triggers)
    {
      this.triggers[key].tick();
    }
  }
}
