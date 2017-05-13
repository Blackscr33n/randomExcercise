import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditExcercise page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-edit-excercise',
  templateUrl: 'edit-excercise.html',
})
export class EditExcercise {
  private repeats: any;
  private maxRepeats: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
      this.repeats = navParams.get('repeats');
      this.maxRepeats = this.repeats;
      console.log(this.repeats);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditExcercise');
  }

  close() {
    this.viewCtrl.dismiss(this.repeats);
  }

}
