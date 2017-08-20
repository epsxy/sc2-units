import { UnitPage } from '../unit/unit';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NotFoundPage } from '../404NotFound/404';
import { SC2Race } from '../../model/sc2races';
import { SC2Unit } from '../../model/sc2unit';
import { SC2_RACES } from '../../data/races/races';
import { SC2_UNITS } from '../../data/units/units';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class RacePage {
  raceId: string;
  currentRace: SC2Race;
  pageTitle: string;
  units: Array<SC2Unit>;
  nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.nav = navCtrl;
    this.raceId = this.navParams.data['race'];
    let race = SC2_RACES.filter(race => race.id == this.raceId);
    if(race.length != 1 || race == undefined) {
      this.nav.setRoot(NotFoundPage);
    }
    else {
      this.currentRace = race[0];
      this.pageTitle = this.currentRace.name  + ' Units';
      this.units = this.getUnits(this.raceId);
    }
  }

  getUnits(id: string): Array<SC2Unit> {
    return SC2_UNITS.filter(unit => unit.race.id == this.raceId);
  }

  goToUnitPage(id: string) {
    this.nav.push(UnitPage, {
      id: id
    })
  }

  applySearch($event) {
    this.units = SC2_UNITS.filter(unit => 
      unit.race.id == this.raceId && unit.name.toLowerCase().indexOf($event.target.value.toLowerCase()) > -1
    );
  }
}
