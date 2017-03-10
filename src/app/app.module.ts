import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabbarPage } from '../pages/tabbar/tabbar';
import { WorkoutTodoPage } from '../pages/workout-todo/workout-todo';
import { WorkoutOverviewPage } from '../pages/workout-overview/workout-overview';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabbarPage,
    WorkoutTodoPage,
    WorkoutOverviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabbarPage,
    WorkoutTodoPage,
    WorkoutOverviewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
