import { Injectable } from '@angular/core';
import { Clicker } from 'app/clickers/clicker'
import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';

@Injectable()
export class ClickerService {

  private clickers: Clicker[] = [];

  constructor(private currencyService: CurrencyService,
              private progressService: ProgressService) 
  { 
    this.clickers.push(new Clicker(
      currencyService,
      progressService,
      "clicker",
      "clickers",
      "clicker_description",
      0,        // reveal
      0,        // reveal_cost
      0,        // reveal_name
      0.1,      // power
      0,        // currency
      15,       // cost
      1.05));   // cost_multiplier

    this.clickers.push(new Clicker(
      currencyService,
      progressService,
      "intern",
      "interns",
      "intern_description",
      150,
      200,
      250,
      2,
      0,
      300,
      1.10));
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
      this.progressService.trigger('generic_clicker_purchase');
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
  	return this.currencyService.hasEnough(currency,this.xcost(clicker_index));
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
