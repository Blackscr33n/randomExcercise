import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExcerciseUnits } from '../../models/excerciseUnits';
import { Excercise } from '../../models/excercise';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public excercises: ExcerciseUnits = new ExcerciseUnits();
  public repeats: Array<number> = [10, 20, 30];
  public activeExcercise: Excercise;
  public activeRepeat: number = 10;
  public unit: string = "Repeats";

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public events: Events,
  ) {

  }

  randomExcercise() {
    console.log(this.excercises.excercises.length - 1);
    let indexExcercise = Math.floor((Math.random() * (this.excercises.excercises.length))) + 0;
    let indexRepeats = Math.floor((Math.random() * (this.repeats.length))) + 0;
    console.log(indexExcercise, indexRepeats);
    this.activeExcercise = this.excercises.excercises[indexExcercise];
    if (this.activeExcercise.repeatUnit == 's') {
      this.activeRepeat = this.repeats[indexRepeats] * 2;
    } else if (this.activeExcercise.repeatUnit == "repeats/leg") {
      this.activeRepeat = this.repeats[indexRepeats] / 2;
    } else {
      this.activeRepeat = this.repeats[indexRepeats];
    }

    this.storage.ready().then(() => {
      this.saveExcerciseToStorage(this.activeExcercise, this.activeRepeat);
    });

  }

  saveExcerciseToStorage(excercise, repeats) {
    let fullExcercise = {
      'excercise': excercise,
      'repeats': repeats
    };
    this.storage.get('todo-list').then((value) => {
      let val = JSON.parse(value);
      console.log(JSON.parse(value));
      if (val !== null) {
        let foundElem = val.find((elem) => {
          return elem.excercise.name == excercise.name
        });
        if (foundElem === undefined) {
          val.push(fullExcercise);
          this.events.publish('excercises:changed', val.length);
          this.storage.set('todo-list', JSON.stringify(val)).then(() => {
            this.storage.get('todo-list').then((nval) => {
              console.log(JSON.parse(nval));
            });
          });
        } else {
          let indexOfFoundElem = val.indexOf(foundElem);
          val[indexOfFoundElem].repeats = val[indexOfFoundElem].repeats + repeats;
          this.storage.set('todo-list', JSON.stringify(val)).then(() => {
            this.storage.get('todo-list').then((nval) => {
              console.log(JSON.parse(nval));
            });
          });
        }
      } else {
        this.events.publish('excercises:changed', 1);
        this.storage.set('todo-list', JSON.stringify([fullExcercise])).then(() => {
          this.storage.get('todo-list').then((nval) => {
            console.log(JSON.parse(nval));
          });
        });
      }

    });

  }

}
