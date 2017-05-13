import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitial } from '@ionic-native/admob-free';

import { TabbarPage } from '../pages/tabbar/tabbar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabbarPage;

  constructor(
    platform: Platform,
    statusbar: StatusBar,
    splash: SplashScreen,
    private admobFree: AdMobFree,
    private admobFreeInter: AdMobFreeInterstitial
  ) {

    platform.ready().then(() => {
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        isTesting: false,
        autoShow: true,
        id: 'ca-app-pub-9281978078443748/7969982119',
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));

      this.admobFree.interstitial.config({
        id: 'ca-app-pub-9281978078443748/5420678110',
      })

      this.admobFree.interstitial.prepare().then(() => {
        this.admobFree.interstitial.show();
      });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusbar.styleBlackTranslucent();
      splash.hide();
    });
  }
}
