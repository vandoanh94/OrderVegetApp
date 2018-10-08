import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDoc: any;
  constructor(public navCtrl: NavController,
    public fireStore: AngularFirestore) {
      var value: any = {
        name: "doanh",
        surname: "van",
        age: 24
      }
      this.addUser(value);
  }
  addUser(value){
    return new Promise<any>((resolve, reject) => {
      this.fireStore.collection('/users').add({
        name: value.name,
        surname: value.surname,
        age: parseInt(value.age)
      })
      .then(
        (res) => {
          resolve(res)
        },
        err => reject(err)
      )
    })
  }
}
