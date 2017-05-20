import { Injectable } from '@angular/core';
import { Trigger } from 'app/progress/trigger';
import { CurrencyService } from 'app/currency/currency.service';
import { Savable } from 'app/save/savable';

@Injectable()
export class ProgressService implements Savable {

  private triggers: {[label: string]: Trigger} = {};

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

  public labels(): string[]
  {
    return Object.keys(this.triggers);
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    for(let trigger_label of this.labels())
    {
      let trigger: Trigger = this.triggers[trigger_label];
      state[trigger_label] = trigger.getState(); 
    }
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
    for(let trigger_label of this.labels())
    {
      let trigger: Trigger = this.triggers[trigger_label];
      trigger.setState(state[trigger_label]); 
    }
  }

  public clearState(): void
  {
    for(let trigger_label of this.labels())
    {
      let trigger: Trigger = this.triggers[trigger_label];
      trigger.clearState(); 
    }
  }
}
