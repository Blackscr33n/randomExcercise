import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { List } from 'ionic-angular';
import { ModalController, Modal } from 'ionic-angular';
import { EditExcercise } from './edit-excercise/edit-excercise';

@Component({
  selector: 'page-workout-todo',
  templateUrl: 'workout-todo.html'
})
export class WorkoutTodoPage {
  todoList: any;
  @ViewChild(List) list: List;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public events: Events
  ) { }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('todo-list').then((todoListJSON) => {
        console.log(JSON.parse(todoListJSON));
        let todoList = JSON.parse(todoListJSON);
        todoList.sort((a, b) => {
          if (a.excercise.name < b.excercise.name) return -1;
          if (a.excercise.name > b.excercise.name) return 1;
          return 0;
        });
        this.todoList = JSON.parse(todoList);
      });
    });
  }

  showDetail(todo) {
    console.log("excercise clicked: " + todo.excercise.name);
  }

  presentActionSheet(todo) {
    console.log(todo);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify this excercise',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.completeTodo(todo);
          }
        },
        {
          text: 'Edit',
          handler: () => {
            this.returnModal(todo.repeats).onDidDismiss((repeats) => {
              let foundTodo = this.todoList.find((elem) => {
                return elem.excercise.id == todo.excercise.id;
              })
              console.log(foundTodo.excercise.id, todo.excercise.id);
              console.log(foundTodo);
              foundTodo.repeats = repeats;
              let indexOfFoundElem = this.todoList.indexOf(foundTodo);
              console.log("index:", indexOfFoundElem);
              this.todoList[indexOfFoundElem].repeats = repeats;
              console.log("foundElem + todoList-item:", foundTodo, this.todoList[indexOfFoundElem])
              this.storage.set('todo-list', JSON.stringify(this.todoList)).then(() => {
                console.log("sucessfully saved");
              });
            });
          }
        }
      ]
    });
    this.list.closeSlidingItems();
    actionSheet.present();
  }

  returnModal(repeats): Modal {
    let modal = this.modalCtrl.create(EditExcercise, { repeats: repeats });
    modal.present();
    return modal;
  }

  presentModal(todo) {
    let repeats = todo.repeats;
    let modal = this.modalCtrl.create(EditExcercise, { repeats: repeats });
    this.list.closeSlidingItems();
    modal.present();
    modal.onDidDismiss((repeats) => {
      let foundTodo = this.todoList.find((elem) => {
        return elem.excercise.id == todo.excercise.id;
      })
      foundTodo.repeats = repeats;
      let indexOfFoundElem = this.todoList.indexOf(foundTodo);
      console.log("index:", indexOfFoundElem);
      this.todoList[indexOfFoundElem].repeats = repeats;
      this.storage.set('todo-list', JSON.stringify(this.todoList));
    });
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
        this.events.publish('excercises:changed', todoList.length);
        this.storage.set('todo-list', JSON.stringify(todoList));
        this.todoList = todoList;
      });
    });
  }
}
