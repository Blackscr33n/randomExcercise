import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabbarPage } from '../pages/tabbar/tabbar';
import { WorkoutTodoPage } from '../pages/workout-todo/workout-todo';
import { WorkoutOverviewPage } from '../pages/workout-overview/workout-overview';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EditExcercise } from '../pages/workout-todo/edit-excercise/edit-excercise';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree, AdMobFreeInterstitial } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabbarPage,
    WorkoutTodoPage,
    WorkoutOverviewPage,
    EditExcercise
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabbarPage,
    WorkoutTodoPage,
    WorkoutOverviewPage,
    EditExcercise
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar,
    AdMobFree,
    AdMobFreeInterstitial
  ]
})
export class AppModule {}
