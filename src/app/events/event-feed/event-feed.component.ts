import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/events/events.service';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';
import { LanguageService } from 'app/language/language.service';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.scss']
})
export class EventFeedComponent implements OnInit {

  constructor(public events: EventsService,
              public progress: ProgressService,
              public currency: CurrencyService,
              public lang: LanguageService)
  { 
  }

  ngOnInit() {
  }
  
}
