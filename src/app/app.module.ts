import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LanguageService } from 'app/language/language.service'
import { CurrencyService } from 'app/currency/currency.service'
import { ClickerService } from 'app/clickers/clicker.service'
import { ProgressService } from 'app/progress/progress.service'


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClickerPanelComponent } from './clickers/clicker-panel/clicker-panel.component';
import { ClickerItemComponent } from './clickers/clicker-item/clicker-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerPanelComponent,
    ClickerItemComponent
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
    ProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
