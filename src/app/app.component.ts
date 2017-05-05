import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TabbarPage } from '../pages/tabbar/tabbar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabbarPage;

  constructor(
    platform: Platform,
    statusbar: StatusBar,
    splash: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusbar.styleDefault();
      splash.hide();
    });
  }
}
