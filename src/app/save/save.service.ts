import { Injectable } from '@angular/core';
import { ProgressService } from 'app/progress/progress.service';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';
import { EventsService } from 'app/events/events.service';

@Injectable()
export class SaveService {

  constructor(
    private progress: ProgressService,
    private currency: CurrencyService,
    private clickers: ClickerService,
    private events: EventsService
  ) 
  {
  }

  public save(): void
  {
    let save: {[label: string]: any} = {};
    save['progress'] = this.progress.getState();
    save['currency'] = this.currency.getState();
    save['clickers'] = this.clickers.getState();
    save['events'] = this.events.getState();
    save['timestamp'] = new Date();
    localStorage.setItem('save', JSON.stringify(save));
  }

  public load(): {[label: string]: any}
  {
    let save = JSON.parse(localStorage.getItem('save'));
    this.progress.setState(save["progress"]);
    this.currency.setState(save["currency"]);
    this.clickers.setState(save["clickers"]);
    this.events.setState(save["events"]);
    return save;
  }
}
