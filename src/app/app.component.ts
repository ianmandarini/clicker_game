import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'app/language/language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public click_enabled: boolean = false;
  public num_clicks: number = 0;

  public moneys_enabled: boolean = false;
  private money_base_cost: number = 0;
  private money_extra_cost: number = 10;
  private money_cost_multiplier: number = 1.1;
  public money_cost: number = this.money_base_cost + this.money_extra_cost;
  public num_moneys: number = 0;

  public clickers_enabled: boolean = false;
  private clicker_cost_multiplier: number = 1.1;
  public clicker_cost: number = 10;
  public num_clickers: number = 0;

  constructor(public lang: LanguageService)
  {
  }

  click()
  {
    this.click_enabled = true;
    this.num_clicks += 1;
  }

  buyMoney()
  {
    this.moneys_enabled = true;
    if(this.num_clicks >= this.money_cost)
    {
      this.money_base_cost += this.money_extra_cost;
      this.money_extra_cost = Math.floor(this.money_extra_cost * this.money_cost_multiplier);
      this.num_moneys += 1;
      this.money_cost = this.money_base_cost + this.money_extra_cost;
    }
  }

  buyClicker()
  {
    this.clickers_enabled = true;
    if(this.num_moneys >= this.clicker_cost)
    {
      this.num_moneys -= this.clicker_cost;
      this.clicker_cost = Math.floor(this.clicker_cost * this.clicker_cost_multiplier);
      this.num_clickers += 1;
    }
  }

  clickerTick()
  {
    this.num_clicks += this.num_clickers;
  }

  ngOnInit()
  {
    setInterval(() => {this.clickerTick()},1000);
  }
}
