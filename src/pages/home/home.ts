import { ListPage } from '../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.nav = navCtrl;
  }

  public navigateToListPage() {
    this.nav.push(ListPage);
  }

}
