import { Component, OnInit } from '@angular/core';
import { ClickerService } from 'app/clickers/clicker.service';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';
import { LanguageService } from 'app/language/language.service';

@Component({
  selector: 'app-clicker-panel',
  templateUrl: './clicker-panel.component.html',
  styleUrls: ['./clicker-panel.component.scss']
})
export class ClickerPanelComponent implements OnInit {

  private clicker_panel_price: number = 30;
  private clicker_panel_currency: number = 0;

  constructor(public clickers: ClickerService,
              public progress: ProgressService,
              public currency: CurrencyService,
              public lang: LanguageService)
  {
  }

  ngOnInit() {
  }

  canPurchase(): boolean
  {
    return this.currency.hasEnough(this.clicker_panel_currency,this.clicker_panel_price);
  }

  purchase(): void
  {
    if(this.canPurchase())
    {
      this.currency.add(this.clicker_panel_currency,(-1)*this.clicker_panel_price);
      this.progress.trigger("clicker_panel_purchase");    
    }
  }

  currencyTagP(): string
  {
    return this.currency.tagP(this.clicker_panel_currency);
  }

  xcost(): number
  {
    return Math.floor(this.clicker_panel_price);
  }

}
