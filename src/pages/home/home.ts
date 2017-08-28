import { RacePage } from '../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SC2Race, SC2RaceType } from "../../model/sc2races";
import { SC2_RACES } from "../../data/races/races";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav;
  private races: Array<SC2Race>;
  
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.nav = navCtrl;
    this.races = SC2_RACES;
  }

  public navigateToListPage() {
    this.nav.push(RacePage);
  }

  public generateThumbnail(race: SC2Race) {
    if(race.type == SC2RaceType.PROTOSS) {
      return 'assets/icon/protoss-logo.png'
    }
    if(race.type == SC2RaceType.ZERG) {
      return 'assets/icon/zerg-logo.png'
    }
    if(race.type == SC2RaceType.TERRAN) {
      return 'assets/icon/terran-logo.png'
    }

  }

  goToListPage(race) {
    this.nav.setRoot(RacePage, {
      race: race.id
    })
  }

}
