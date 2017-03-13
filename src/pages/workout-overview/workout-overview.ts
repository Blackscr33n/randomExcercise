import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the WorkoutOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-overview',
  templateUrl: 'workout-overview.html'
})
export class WorkoutOverviewPage {
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
    "Plank Pushups",
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutOverviewPage');
  }

}
