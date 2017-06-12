import { Component, OnInit, Input } from '@angular/core';
import { UpgradeService } from 'app/upgrade/upgrade.service';
import { LanguageService } from 'app/language/language.service';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';

@Component({
  selector: 'app-upgrade-item',
  templateUrl: './upgrade-item.component.html',
  styleUrls: ['./upgrade-item.component.sass']
})
export class UpgradeItemComponent implements OnInit {

  @Input("eventTag") public eventTag: string;

  constructor( 
    public lang: LanguageService,
    public currency: CurrencyService,
    public upgrades: UpgradeService,
    public progress: ProgressService) 
    { 
    }

  ngOnInit() {
  }

  public onClick(): void
  {
    if(this.upgrades.canPurchase(this.eventTag) && !this.upgrades.isPurchased(this.eventTag))
    {
      this.upgrades.purchase(this.eventTag);
    }   
  }

}
