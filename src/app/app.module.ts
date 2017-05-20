import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LanguageService } from 'app/language/language.service';
import { CurrencyService } from 'app/currency/currency.service';
import { ClickerService } from 'app/clickers/clicker.service';
import { ProgressService } from 'app/progress/progress.service';
import { EventsService } from 'app/events/events.service';
import { ContentService } from 'app/content/content.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClickerPanelComponent } from './clickers/clicker-panel/clicker-panel.component';
import { ClickerItemComponent } from './clickers/clicker-item/clicker-item.component';
import { EventFeedComponent } from './events/event-feed/event-feed.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { SingleButtonEventComponent } from './events/event-item/single-button-event/single-button-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerPanelComponent,
    ClickerItemComponent,
    EventFeedComponent,
    EventItemComponent,
    SingleButtonEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgbModule
  ],
  providers: [
    LanguageService,
    CurrencyService,
    ClickerService,
    ProgressService,
    EventsService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
