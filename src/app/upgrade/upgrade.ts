import { CurrencyService } from 'app/currency/currency.service';
import { ProgressService } from 'app/progress/progress.service';
import { Trigger } from 'app/progress/trigger';
import { Savable } from 'app/save/savable';

export class Upgrade {

  private tag_title: string;
  private tag_description: string;

  constructor(
    private currencyService: CurrencyService,
    private progressService: ProgressService,
    private id_tag: string,
    private currency: number,
    private cost: number,
    reveal_condition: { (): boolean; },
    purchase_callback: { (): void; }
    )
  {
    this.tag_title = id_tag + "_title";
    this.tag_description = id_tag + "_description";

    let self = this;

    this.progressService.addTrigger(this.id_tag + "_reveal", new Trigger() );
    this.progressService.addTrigger(this.id_tag + "_purchased", new Trigger() );

    this.progressService.addCondition(this.id_tag + "_reveal", reveal_condition);
    this.progressService.addCallBack(this.id_tag + "_purchased", purchase_callback);
  }

  public tag(): string
  {
    return this.id_tag;
  }

  public tagT(): string
  {
    return this.tag_title;
  }

  public tagD(): string
  {
    return this.tag_description;
  }

  public xcost(): number
  {
    return Math.floor(this.cost);
  }

  public canPurchase(): boolean {
    return this.currencyService.hasEnough(this.currency,this.xcost());
  }

  public purchase(): void
  {
    if(this.canPurchase())
    {
      this.currencyService.add(this.currency,(-1)*this.xcost());
      this.progressService.trigger(this.id_tag + "_purchased");
    }
  }

  public isPurchased(): boolean
  {
    return this.progressService.isActive(this.id_tag + "_purchased");
  }

  public getCurrency(): number
  {
    return this.currency;
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
  }

  public clearState(): void
  {
  }
}
