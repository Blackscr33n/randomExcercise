import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the WorkoutTodo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-todo',
  templateUrl: 'workout-todo.html'
})
export class WorkoutTodoPage {
  todoList: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) { }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('todo-list').then((todoList) => {
        console.log(JSON.parse(todoList));
        this.todoList = JSON.parse(todoList);
      });
    });
  }

  showDetail(todo) {
    console.log("excercise clicked: " + todo.excercise.name);
  }

  completeTodo(todo) {
    this.storage.ready().then(() => {
      this.storage.get('todo-list').then((list) => {
        let todoList = JSON.parse(list);
        let foundTodo = todoList.find((elem) => {
          return elem.excercise.name == todo.excercise.name;
        });
        let indexOfCompletedItem = todoList.indexOf(foundTodo);
        todoList.splice(indexOfCompletedItem, 1);
        this.storage.set('todo-list', JSON.stringify(todoList));
        this.todoList = todoList;
      });
    });
  }

}
