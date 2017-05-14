import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'app/language/language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public Math = Math;
  public reveal_modifier: number = 0.7;

  public click_enabled: boolean = false;
  public num_clicks: number = 0;
  public num_clicks_shown: number = this.num_clicks;

  public money_enabled: boolean = false;
  private money_base_cost: number = 0;
  private money_extra_cost: number = 5;
  private money_cost_multiplier: number = 1.05;
  public money_cost: number = this.money_base_cost + this.money_extra_cost;
  public money_cost_shown: number = this.money_cost;
  public num_money: number = 0;
  public num_money_shown: number = this.num_money;

  public clickers_enabled: boolean = false;
  private clicker_cost_multiplier: number = 1.05;
  public clicker_cost: number = 5;
  public clicker_cost_shown: number = this.clicker_cost;
  public num_clickers: number = 0;
  public num_clickers_shown: number = this.num_clickers;

  public sell_clicks_enabled: boolean = false;
  public sell_clicks_min_amount_to_enable: number = 300;
  private sell_clicks_amount: number = 100;
  public sell_clicks_amount_shown: number = this.sell_clicks_amount;
  private sell_clicks_money_amount: number = 4;
  public sell_clicks_money_amount_shown: number = this.sell_clicks_money_amount;
  private sell_clicks_amount_multiplier: number = 1.5;
  private sell_clicks_money_amount_multiplier: number = 1.5;


  constructor(public lang: LanguageService)
  {
  }

  click()
  {
    this.click_enabled = true;
    this.num_clicks += 1;
    this.num_clicks_shown = Math.floor(this.num_clicks);
  }

  buyMoney()
  {
    this.money_enabled = true;
    if(this.num_clicks_shown >= this.money_cost_shown)
    {
      this.money_base_cost += this.money_extra_cost;
      this.money_extra_cost *= this.money_cost_multiplier;

      this.money_cost = this.money_base_cost + this.money_extra_cost;
      this.money_cost_shown = Math.floor(this.money_cost);

      this.num_money += 1;
      this.num_money_shown = Math.floor(this.num_money);
    }
  }

  buyClicker()
  {
    this.clickers_enabled = true;
    if(this.num_money_shown >= this.clicker_cost_shown)
    {
      this.num_money -= this.clicker_cost_shown;
      this.num_money_shown = Math.floor(this.num_money);

      this.clicker_cost *= this.clicker_cost_multiplier;
      this.clicker_cost_shown = Math.floor(this.clicker_cost);

      this.num_clickers += 1;
      this.num_clickers_shown = Math.floor(this.num_clickers);
    }
  }

  sellClicks()
  {
    this.sell_clicks_enabled = true;
    if(this.num_clicks_shown >= this.sell_clicks_amount_shown)
    {
      this.num_clicks -= this.sell_clicks_amount_shown;
      this.num_clicks_shown = Math.floor(this.num_clicks);

      this.num_money += this.sell_clicks_money_amount_shown;
      this.num_money_shown = Math.floor(this.num_money);

      this.sell_clicks_amount *= this.sell_clicks_amount_multiplier;
      this.sell_clicks_amount_shown = Math.floor(this.sell_clicks_amount);

      this.sell_clicks_money_amount *= this.sell_clicks_money_amount_multiplier;
      this.sell_clicks_money_amount_shown = Math.floor(this.sell_clicks_money_amount);
    }
  }

  clickerTick()
  {
    this.num_clicks += this.num_clickers;
    this.num_clicks_shown = Math.floor(this.num_clicks);
  }

  ngOnInit()
  {
    setInterval(() => {this.clickerTick()},1000);
  }
}
