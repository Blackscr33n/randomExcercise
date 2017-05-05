import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      /*if(/(android)/i.test(navigator.userAgent)) {
            this.admobId = {
                banner: 'ca-app-pub-xxx/yyy',
                interstitial: 'ca-app-pub-jjj/kkk'
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            this.admobId = {
                banner: 'ca-app-pub-ddd/sss',
                interstitial: 'ca-app-pub-ppp/zzz'
            };
        }*/
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabbarPage');
  }

}
