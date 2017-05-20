import { Injectable } from '@angular/core';
import { Currency } from 'app/currency/currency';

@Injectable()
export class CurrencyService {

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
}
