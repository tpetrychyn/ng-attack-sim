import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  repeatRandomChar(str) {
    var i = Math.floor(Math.random() * str.length);
    return str.slice(0, i+1) + str.slice(i);
  }

  randomTypo(str) {
    return Math.random() > 0 ? this.repeatRandomChar(str) : str;
  }

  name: string = this.randomTypo('Please sign in')

}
