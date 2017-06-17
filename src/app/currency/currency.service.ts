import { Injectable } from '@angular/core';
import { Currency } from 'app/currency/currency';
import { Savable } from 'app/save/savable';

@Injectable()
export class CurrencyService implements Savable {

  private currency: Currency[] = [];

  constructor() 
  { 
  }

  public addCurrency(currency: Currency)
  {
    this.currency.push(currency);
  }

  public add(currency_index:number, value: number): void
  {
    this.currency[currency_index].add(value);
  }

  public tag(currency_index:number): string
  {
    return this.currency[currency_index].tag();
  }

  public tagS(currency_index:number): string
  {
    return this.currency[currency_index].tagS();
  }

  public tagP(currency_index:number): string
  {
    return this.currency[currency_index].tagP();
  }

  public hasEnough(currency_index: number, value: number): boolean
  {
    return this.currency[currency_index].hasEnough(value);
  }

  public xcount(currency_index: number): number
  {
    return this.currency[currency_index].xcount();
  }

  public total(): number
  {
    return this.currency.length;
  }

  public indexes(): number[]
  {
    let array: number[] = [];
    for (let i = 0; i < this.total(); i++) { array.push(i); }
    return array;
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    for(let currency_instance of this.currency)
    {
      state[currency_instance.tag()] = currency_instance.getState(); 
    }
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
    for(let currency_instance of this.currency)
    {
      if(state[currency_instance.tag()] !== undefined)
      {
        currency_instance.setState(state[currency_instance.tag()]);
      }
    }
  }

  public clearState(): void
  {
    for(let currency_instance of this.currency)
    {
      currency_instance.clearState(); 
    }
  }
}
