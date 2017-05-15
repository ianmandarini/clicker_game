import { CurrencyService } from 'app/currency/currency.service';

export class Clicker {
  private enabled: boolean = false;
  private count: number = 0;

  constructor(
    private currencyService: CurrencyService,
    private tag_singular,
    private tag_plural,
    private tag_description,
    private power: number,
    private currency: number,
    private cost: number,
    private cost_multiplier: number)
  {

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

  public tick(): void
  {
    this.currencyService.add(0,this.count * this.power);
  }

  public xcount(): number
  {
    return this.count;
  }

  public purchase(): void
  {
    if(this.currencyService.hasEnough(this.currency,this.xcost()))
    {
      this.currencyService.add(this.currency,(-1)*this.xcost());
      this.cost *= this.cost_multiplier;
      this.count += 1;
    }
  }

  public getCurrency(): number
  {
    return this.currency;
  }
}
