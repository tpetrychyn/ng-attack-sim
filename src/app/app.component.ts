import { Component, OnInit } from '@angular/core';

import { PointsComponent } from './points/points.component';

import { FeedService } from './feed/feed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _feedService;

  constructor(private feedService: FeedService) {
    game.multiplier += 0.1;
    this._feedService = feedService;
  }

  ngOnInit() {
    this._feedService.pushFeed(`Welcome to Angular Attack simulator. You have 48 hours to build the best Angular app you can.`)
  }

  get hours() {
    return game.hours;
  }

  get score() {
    return game.score;
  }
  
  hourInterval = setInterval(() => {
    game.hours -= 1;
  }, 20000);
}
