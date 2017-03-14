import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExcerciseUnits } from '../../models/excerciseUnits';
import { Excercise } from '../../models/excercise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public excercises: ExcerciseUnits = new ExcerciseUnits();
  public repeats: Array<number> = [10,20,30];
  public activeExcercise: Excercise;
  public activeRepeat: number = 10;
  public unit: string = "Repeats";

  constructor(public navCtrl: NavController) {
    this.randomExcercise();
  }

  randomExcercise() {
    console.log(this.excercises.excercises.length -1);
    let indexExcercise = Math.floor((Math.random() * (this.excercises.excercises.length))) + 0;
    let indexRepeats = Math.floor((Math.random() * (this.repeats.length))) + 0;
    console.log(indexExcercise, indexRepeats);
    this.activeExcercise = this.excercises.excercises[indexExcercise];
    if (this.activeExcercise.repeatUnit == 's') {
      this.activeRepeat = this.repeats[indexRepeats] * 2;
    } else if(this.activeExcercise.repeatUnit == "repeats/leg") {
      this.activeRepeat = this.repeats[indexRepeats] / 2;
    } else {
      this.activeRepeat = this.repeats[indexRepeats];
    }

  }

}
