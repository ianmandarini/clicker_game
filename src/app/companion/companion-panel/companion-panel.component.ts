import { Component, OnInit } from '@angular/core';
import { CompanionService } from 'app/companion/companion.service';
import { LanguageService } from 'app/language/language.service';

@Component({
  selector: 'app-companion-panel',
  templateUrl: './companion-panel.component.html',
  styleUrls: ['./companion-panel.component.scss']
})
export class CompanionPanelComponent implements OnInit {

  public isExpanded: boolean = true;

  constructor( public companion: CompanionService,
               public lang: LanguageService ) 
  {
  }

  public onHeaderClick(): void
  {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
  }

}
