import { Component, OnInit, EventEmitter } from '@angular/core';

export class FeedService {
  public onPush: EventEmitter<string> = new EventEmitter<string>();

  public pushFeed(message: string) {
      this.onPush.emit(message);
  }
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private service: FeedService) {
    this.service.onPush.subscribe({
      next: (message: string) => {
          //console.log(`Received message ${message}`);
          this.feedStack.unshift(message);
        }
    })
   }

  ngOnInit() {
  }

  feedStack = [
  ]

}
