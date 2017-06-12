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

  constructor(public clickers: ClickerService,
              public progress: ProgressService,
              public currency: CurrencyService,
              public lang: LanguageService)
  {
  }

  ngOnInit() {
  }

}
