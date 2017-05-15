import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'app/language/language.service';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public lang: LanguageService, 
              public currency: CurrencyService, 
              public clickers: ClickerService)
  {
  }

  public click()
  {
    this.currency.add(0,1);
  }

  private gameTick()
  {
    for(let i=0; i< this.clickers.total(); i++)
    {
      this.clickers.tick(i);
    }
  }

  ngOnInit()
  {
    setInterval(() => {this.gameTick()},1000);
  }
}
