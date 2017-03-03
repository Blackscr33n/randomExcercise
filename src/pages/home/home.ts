import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public excercises: Array<string> = ["Plank", "Pushup", "Dips"]
  public repeats: Array<number> = [10,20,30];
  public activeExcercise: string = "";
  public activeRepeat: number = 10;
  public unit: string = "Wdhg";

  constructor(public navCtrl: NavController) {

  }

  randomExcercise() {
    console.log(this.excercises.length -1);
    let indexExcercise = Math.floor((Math.random() * (this.excercises.length))) + 0;
    let indexRepeats = Math.floor((Math.random() * (this.repeats.length))) + 0;
    console.log(indexExcercise, indexRepeats);
    this.activeExcercise = this.excercises[indexExcercise];
    if (this.activeExcercise == "Plank") {
      this.activeRepeat = this.repeats[indexRepeats] * 2;
      this.unit = "s";
    } else {
      this.activeRepeat = this.repeats[indexRepeats];
      this.unit = "Wdhg";
    }

  }

}
