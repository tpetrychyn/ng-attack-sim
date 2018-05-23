import { Component, OnInit } from '@angular/core';

import { FeedService } from '../../feed/feed.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _feedService;

  constructor(private feedService: FeedService) { 
    this._feedService = feedService;
  }

  ngOnInit() {
  }

  loginLevel = 0;
  loginCost = 2;

  createLogin() {
    if (game.points >= this.loginCost) {
      this._feedService.pushFeed("Purchased Login Page");
      game.points -= this.loginCost;
      game.multiplier += 0.1;
      this.loginLevel += 1;
      this.loginCost += 0.5*this.loginLevel;
    }
  }

}
