import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: '404.html'
})
export class NotFoundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
