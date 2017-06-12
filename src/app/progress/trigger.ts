import { Savable } from 'app/save/savable';

export class Trigger implements Savable {

  private active: boolean = false;
  private callbacks: { (): void; } [] = []
  private conditions: { (): boolean; } [] = []

  constructor() {
  }

  public isActive()
  {
    return this.active;
  }

  public activate()
  {
    if(this.active === false)
    {
      this.active = true;
      for(let callback of this.callbacks)
      {
        callback();
      }
    }
  }

  public addCallBack( callback_function: { (): void; }): void
  {
    this.callbacks.push(callback_function);
  }

  public addCondition( condition_function: { (): boolean; }): void
  {
    this.conditions.push(condition_function);
  }

  public tick(): void
  {
    if(this.conditions.length === 0)
    {
      return;
    }
    for(let condition of this.conditions)
    {
      if(condition() === false)
      {
        return;
      }
    }
    this.activate();
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    state["active"] = this.active;
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
    this.active = state["active"];
    if(this.active === true)
    {
      for(let callback of this.callbacks)
      {
        callback();
      }     
    }
  }

  public clearState(): void
  {
    this.active = false;
  }
}
