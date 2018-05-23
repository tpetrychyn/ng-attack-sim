import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sleep() {
    game.fatigue = 0;
    clearInterval(this.fatigueInterval);
    this.fatigueInterval = setInterval(this.fatigueCount, 1000)
  }

  fatigueInterval = setInterval(this.fatigueCount, 1000)
  pointInterval = setInterval(this.pointCount, 100);

  get points() {
    return game.points;
  }

  get multiplier() {
    return game.multiplier - game.fatigue*game.multiplier*0.01;
  }

  get fatigue() {
    return game.fatigue;
  }

  pointCount() {
    game.points += 1*(game.multiplier - game.fatigue*game.multiplier*0.01);
    console.log(game.multiplier);
  }

  fatigueCount() {
    game.fatigue = (game.fatigue + 1).clamp(0, 100);
  }

}
