import { ListPage } from '../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav;

  constructor(public navCtrl: NavController, public storage: Storage, private sqlite: SQLite) {
    this.nav = navCtrl;
    // Local storage usage
    // storage.ready().then(() => {
    //   storage.set('name', 'Toto');
    //   storage.get('name').then((val) => {
    //     console.log('Your age is', val);
    //   });
    // });
    // SQLite storage, native device only
    // sqlite.create({
    //   name: 'myApp.db', 
    //   location: 'default'
    // }).then((db: SQLiteObject) => {
    //   console.log('db created')
    //   db.executeSql('create table testMyApp(name VARCHAR(32))', {})
    //   .then(() => console.log('table created'))
    //   .catch(e => console.log(e))
    // });
  }

  public navigateToListPage() {
    this.nav.push(ListPage);
  }

}
