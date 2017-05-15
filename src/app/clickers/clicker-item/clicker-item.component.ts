import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';
import { LanguageService } from 'app/language/language.service'

@Component({
  selector: 'app-clicker-item',
  templateUrl: './clicker-item.component.html',
  styleUrls: ['./clicker-item.component.css']
})
export class ClickerItemComponent implements OnInit {

  @Input("clickerIndex") public clicker_index: number;



  constructor( 
    public lang: LanguageService,
    public currency: CurrencyService,
    public clickers: ClickerService) { }

  ngOnInit() {
  }

}
