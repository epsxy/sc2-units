import { HomePage } from '../home/home';
import { NotFoundPage } from '../404NotFound/404';
import { SC2_RACES } from '../../data/races/races';
import { PROTOSS_UNITS } from '../../data/units/protoss';
import { ZERG_UNITS } from '../../data/units/zerg';
import { TERRAN_UNITS } from '../../data/units/terran';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SC2Race, SC2RaceType } from '../../model/sc2races';
import { SC2Unit } from '../../model/sc2unit';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
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
    return [];
  }
}
