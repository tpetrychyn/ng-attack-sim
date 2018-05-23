import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PointsComponent } from './points/points.component';
import { LoginComponent } from './features/login/login.component';
import { PageComponent } from './page/page.component';
import { FeedComponent, FeedService } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    LoginComponent,
    PageComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
