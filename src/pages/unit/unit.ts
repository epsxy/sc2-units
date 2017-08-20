import { NotFoundPage } from '../404NotFound/404';
import { SC2_UNITS } from '../../data/units/units';
import { SC2Unit } from '../../model/sc2unit';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html'
})
export class UnitPage {
  id: string;
  unit : SC2Unit;
  nav: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl
    this.id = this.navParams.get('id');
    console.log(this.id);
    let unitsMatchingId = SC2_UNITS.filter(unit =>unit.id == this.id);
    if(unitsMatchingId.length != 1) {
      this.nav.setRoot(NotFoundPage);
    }
    else {
      this.unit = unitsMatchingId[0];
    }
  }
}
