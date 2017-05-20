import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';
import { Trigger } from 'app/progress/trigger';

export class Clicker {
  private enabled: boolean = false;
  private count: number = 0;

  private tag_singular: string;
  private tag_plural: string;
  private tag_description: string;

  constructor(
    private currencyService: CurrencyService,
    private progressService: ProgressService,
    private id_tag: string,
    private reveal: number,
    private reveal_cost: number,
    private reveal_name: number,
    private power: number,
    private currency: number,
    private cost: number,
    private cost_multiplier: number)
  {
    this.tag_singular = id_tag + "_singular";
    this.tag_plural = id_tag + "_plural";
    this.tag_description = id_tag + "_description";

    let self = this;

    this.progressService.addTrigger(this.id_tag + "_reveal", new Trigger() );
    this.progressService.addTrigger(this.id_tag + "_reveal_cost", new Trigger() );
    this.progressService.addTrigger(this.id_tag + "_reveal_name", new Trigger() );
    this.progressService.addTrigger(this.id_tag + "_purchase", new Trigger() );

    this.progressService.addCondition(this.id_tag + "_reveal",
      function(): boolean {return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency,self.reveal);});
    this.progressService.addCondition(this.id_tag + "_reveal_cost",
      function(): boolean {return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency,self.reveal_cost);});
    this.progressService.addCondition(this.id_tag + "_reveal_name",
      function(): boolean {return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency,self.reveal_name);});
  }

  public tag(): string
  {
    return this.id_tag;
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

      this.progressService.trigger(this.id_tag + "_purchase");
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
