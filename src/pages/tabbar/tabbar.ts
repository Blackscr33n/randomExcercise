import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//pages
import { HomePage } from '../home/home';
import { WorkoutOverviewPage } from '../workout-overview/workout-overview';
import { WorkoutTodoPage } from '../workout-todo/workout-todo';
/*
  Generated class for the Tabbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabbar',
  templateUrl: 'tabbar.html'
})
export class TabbarPage {
  tab1: any = HomePage;
  tab2: any = WorkoutTodoPage;
  tab3: any = WorkoutOverviewPage;
  excercisesCount: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public events: Events
  ) {
    this.storage.get('todo-list').then((todoList) => {
      this.excercisesCount = JSON.parse(todoList).length;
    });

    events.subscribe('excercises:changed', (length) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.excercisesCount = length;
    });
  }

  ionViewDidLoad() {
  }

}
