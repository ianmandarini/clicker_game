import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';

export class Clicker {
  private enabled: boolean = false;
  private count: number = 0;

  constructor(
    private currencyService: CurrencyService,
    private progressService: ProgressService,
    private tag_singular,
    private tag_plural,
    private tag_description,
    private reveal: number,
    private reveal_cost: number,
    private reveal_name: number,
    private power: number,
    private currency: number,
    private cost: number,
    private cost_multiplier: number)
  {
    let self = this;
    this.progressService.addCondition(this.tag_singular + "_reveal",
      function(): boolean {return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency,self.reveal);});
    this.progressService.addCondition(this.tag_singular + "_reveal_cost",
      function(): boolean {return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency,self.reveal_cost);});
    this.progressService.addCondition(this.tag_singular + "_reveal_name",
      function(): boolean {return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency,self.reveal_name);});
  }

  public setup(): void
  {
    this.enabled = false;
    this.count = 0;
  }

  public tagS(): string
  {
    return this.tag_singular;
  }

  public tagP(): string
  {
    return this.tag_plural;
  }

  public tagDescription(): string
  {
    return this.tag_description;
  }

  public enable()
  {
    this.enabled = true;
  }

  public isEnabled()
  {
    return this.enabled;
  }

  public xcost(): number
  {
    return Math.floor(this.cost);
  }

  public cps(): number
  {
    return this.count * this.power;
  }

  public tick(): void
  {
    this.currencyService.add(0,this.cps()/10.0);
  }

  public xcount(): number
  {
    return this.count;
  }

  public xpower(): number
  {
    return this.power;
  }

  public purchase(): void
  {
    if(this.currencyService.hasEnough(this.currency,this.xcost()))
    {
      this.currencyService.add(this.currency,(-1)*this.xcost());
      this.cost *= this.cost_multiplier;
      this.count += 1;

      this.progressService.trigger(this.tag_singular + "_purchase");
    }
  }

  public getCurrency(): number
  {
    return this.currency;
  }

  public totalPower(): number
  {
    return this.count * this.power;
  }
}
