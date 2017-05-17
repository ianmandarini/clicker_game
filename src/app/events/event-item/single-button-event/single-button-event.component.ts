import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleButtonEvent } from 'app/events/event';
import { LanguageService } from 'app/language/language.service';

@Component({
  selector: 'app-single-button-event',
  templateUrl: './single-button-event.component.html',
  styleUrls: ['./single-button-event.component.sass']
})
export class SingleButtonEventComponent implements OnInit {

  @Input('event') event: SingleButtonEvent;
  @Output('close') onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor( public lang: LanguageService ) { }

  ngOnInit() {
  }

  onClickButton(): void
  {
    this.event.click()
    this.onClose.emit();
  }

}
