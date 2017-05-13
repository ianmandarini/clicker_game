import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public resources: number = 0;
  public clicker_cost: number = 10;
  public clickers_count: number = 0;

  constructor()
  {
  }

  onButtonClick()
  {
    this.resources += 1;
  }

  onButtonClickerClick()
  {
    if(this.resources >= this.clicker_cost)
    {
      this.resources -= this.clicker_cost;
      this.clicker_cost = Math.floor(this.clicker_cost * 1.1);
      this.clickers_count += 1;
    }
  }

  clickerTick()
  {
    this.resources += this.clickers_count;
  }

  ngOnInit()
  {
    setInterval(() => {this.clickerTick()},1000);
  }
}
