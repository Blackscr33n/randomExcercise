import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public excercises: Array<string> = [
    "Plank",
    "Pushup",
    "Dips",
    "Wallsit",
    "Squats",
    "Pencil Squats",
    "Cycling Crunches",
    "Legraise",
    "Legraise with twist",
    "Dips hold",
    "Wall Pushups",
    "Calf Raises",
    "Forward Bands",
    "Ellbow Clicks",
    "Raised Arm Circles",
    "Berni Trizpes",
  ];
  public repeats: Array<number> = [10,20,30];
  public activeExcercise: string = "";
  public activeRepeat: number = 10;
  public unit: string = "Repeats";

  constructor(public navCtrl: NavController) {

  }

  randomExcercise() {
    console.log(this.excercises.length -1);
    let indexExcercise = Math.floor((Math.random() * (this.excercises.length))) + 0;
    let indexRepeats = Math.floor((Math.random() * (this.repeats.length))) + 0;
    console.log(indexExcercise, indexRepeats);
    this.activeExcercise = this.excercises[indexExcercise];
    if ((this.activeExcercise == "Plank") || (this.activeExcercise == "Wallsit") || (this.activeExcercise == "Dips hold") || (this.activeExcercise == "Raised Arm Circles")) {
      this.activeRepeat = this.repeats[indexRepeats] * 2;
      this.unit = "s";
    } else if(this.activeExcercise == "PencilSquats") {
      this.activeRepeat = this.repeats[indexRepeats] / 2;
      this.unit = "Repeats/Leg";
    } else {
      this.activeRepeat = this.repeats[indexRepeats];
      this.unit = "Repeats";
    }

  }

}
