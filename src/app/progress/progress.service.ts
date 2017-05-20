import { Injectable } from '@angular/core';
import { Trigger } from 'app/progress/trigger';
import { CurrencyService } from 'app/currency/currency.service';

@Injectable()
export class ProgressService {

  private triggers: Trigger[] = [];

  constructor(private currencyService: CurrencyService) 
  { 
  }

  addTrigger(trigger_label: string, trigger: Trigger): void
  {
    this.triggers[trigger_label] = trigger;
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
