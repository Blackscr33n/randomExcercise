import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExcerciseUnits } from '../../models/excerciseUnits';
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
  public units: ExcerciseUnits = new ExcerciseUnits();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    }

  ionViewWillLoad() {
    console.log('ionViewDidLoad WorkoutOverviewPage');
  }

}
