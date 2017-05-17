import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';
import { LanguageService } from 'app/language/language.service';
import { ProgressService } from 'app/progress/progress.service'
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clicker-item',
  templateUrl: './clicker-item.component.html',
  styleUrls: ['./clicker-item.component.scss']
})
export class ClickerItemComponent implements OnInit {

  @Input("clickerIndex") public clicker_index: number;

  @ViewChild('tooltip') public tooltip: NgbTooltip;

  private canActivateTooltip: boolean = false;
  public isOnAnimation: boolean = false;

  constructor( 
    public lang: LanguageService,
    public currency: CurrencyService,
    public clickers: ClickerService,
    public progress: ProgressService) { }

  ngOnInit() {
  }

  onClick()
  {
    if(this.clickers.canPurchase(this.clicker_index))
    {
      this.isOnAnimation = false;
      setTimeout(() => {this.isOnAnimation = true;},1);
      this.clickers.purchase(this.clicker_index);
    }
  }

  public onMouseEnter(): void
  {
    this.canActivateTooltip = true;
    setTimeout(()=>
      {
        if(this.canActivateTooltip)
        {
          this.tooltip.open();
        }
      },1000);
  }

  public onMouseLeave(): void
  {
    this.canActivateTooltip = false;
    this.tooltip.close();
    setTimeout(()=>
      {
        this.canActivateTooltip = false;
        this.tooltip.close();
      },1);
  }

  public onPress(): void
  {
    this.tooltip.open();
  }
}
