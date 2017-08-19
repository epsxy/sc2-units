import { PROTOSS_UNITS } from '../../data/units/protoss';
import { ZERG_UNITS } from '../../data/units/zerg';
import { TERRAN_UNITS } from '../../data/units/terran';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SC2RaceType } from '../../model/sc2races';
import { SC2Unit } from '../../model/sc2unit';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  raceId: SC2RaceType;
  pageTitle: string;
  units: Array<SC2Unit>

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.raceId = this.navParams.data['race'];
    this.pageTitle = SC2RaceType[this.raceId]  + ' UNITS';
    this.units = this.getUnits(this.raceId);
    console.log(SC2RaceType[this.raceId]);
    console.log(this.units)
  }

  getUnits(race: SC2RaceType): Array<SC2Unit> {
    if(race == SC2RaceType.PROTOSS) {
      return PROTOSS_UNITS;
    }
    else if(race == SC2RaceType.ZERG) {
      return ZERG_UNITS
    }
    else if(race == SC2RaceType.TERRAN) {
      return TERRAN_UNITS
    }
    else {
      return [];
    }
  }
}
