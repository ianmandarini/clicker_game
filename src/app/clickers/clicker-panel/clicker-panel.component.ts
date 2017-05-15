import { Component, OnInit } from '@angular/core';
import { ClickerService } from 'app/clickers/clicker.service';

@Component({
  selector: 'app-clicker-panel',
  templateUrl: './clicker-panel.component.html',
  styleUrls: ['./clicker-panel.component.css']
})
export class ClickerPanelComponent implements OnInit {

  constructor(public clickers: ClickerService)
  {
  }

  ngOnInit() {
  }

}
