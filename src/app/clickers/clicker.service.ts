import { Injectable } from '@angular/core';
import { Clicker } from 'app/clickers/clicker'
import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';
import { ContentService } from 'app/content/content.service';

@Injectable()
export class ClickerService {

  private clickers: Clicker[] = [];

  constructor(private currency: CurrencyService,
              private progress: ProgressService) 
  { 
  }

  public addClicker(clicker: Clicker): void
  {
    this.clickers.push(clicker);
  }

  public tag(clicker_index: number): string
  {
    return this.clickers[clicker_index].tag();
  }

  public tagS(clicker_index: number): string
  {
    return this.clickers[clicker_index].tagS();
  }

  public tagP(clicker_index: number): string
  {
    return this.clickers[clicker_index].tagP();
  }
  
  public tagDescription(clicker_index: number): string
  {
    return this.clickers[clicker_index].tagDescription();
  }

  public enableClicker(clicker_index: number)
  {
    this.clickers[clicker_index].enable();
  }

  public isEnabled(clicker_index: number)
  {
    return this.clickers[clicker_index].isEnabled();
  }

  public xcost(clicker_index: number): number
  {
    return this.clickers[clicker_index].xcost();
  }

  public xpower(clicker_index: number): number
  {
    return Math.floor(10.0*this.clickers[clicker_index].xpower())/10.0;
  }

  public xcount(clicker_index: number): number
  {
    return this.clickers[clicker_index].xcount();
  }

  public purchase(clicker_index: number): void
  {
    if(this.canPurchase(clicker_index))
    {
      this.progress.trigger('generic_clicker_purchase');
      return this.clickers[clicker_index].purchase();
    }
  }

  public total(): number
  {
  	return this.clickers.length;
  }

  public indexes(): number[]
  {
  	let array: number[] = [];
    for (let i = 0; i < this.total(); i++) { array.push(i); }
  	return array;
  }

  public getCurrency(clicker_index: number): number
  {
  	return this.clickers[clicker_index].getCurrency();
  }

  public canPurchase(clicker_index: number): boolean
  {
  	let currency = this.getCurrency(clicker_index);
  	return this.currency.hasEnough(currency,this.xcost(clicker_index));
  }

  public tick(clicker_index: number): void
  {
  	this.clickers[clicker_index].tick();
  }

  public cps(clicker_index: number): number
  {
    return this.clickers[clicker_index].cps();
  }

  public totalPower(clicker_index: number): number
  {
    return Math.floor(10.0*this.clickers[clicker_index].totalPower())/10.0;
  }
}
