import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NotFoundPage } from '../404NotFound/404';
import { SC2_UNITS } from '../../data/units/units';
import { SC2Unit } from '../../model/sc2unit';
import { SC2Race, SC2RaceType } from '../../model/sc2races';

@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html'
})
export class UnitPage {
  nav: NavController;
  id: string;
  unit: SC2Unit;
  minerals_img: string;
  gas_img: string;
  buildtime_img: string;
  supply_img: string;
  airBadge: string; 
  groundBadge: string;
  
  // booleans to dynamically display informations on units
  canAttack: boolean;
  hasShield: boolean;
  hasEnergy: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl
    this.id = this.navParams.get('id');
    let unitsMatchingId = SC2_UNITS.filter(unit => unit.id == this.id);
    if (unitsMatchingId.length != 1) {
      this.nav.setRoot(NotFoundPage);
    }
    else {
      // development only
      this.unit = unitsMatchingId[0];
      console.log(this.unit);
      this.initShield();
      this.initEnergy();
      this.initAttack();
      this.initTargets();
      this.initAssets();
    }
  }

  initShield() {
    this.hasShield = false;
    if(this.unit.race.type == SC2RaceType.PROTOSS) {
      this.hasShield = true;
    }
  }

  initEnergy() {
    this.hasEnergy = false;
    if(this.unit.information.others.energy != null) {
      this.hasEnergy = true;
    }
  }

  initAttack() {
    this.canAttack = true
    if(this.unit.information.attack == null) {
      this.canAttack = false;
    }
  }

  initTargets() {
    if(this.unit.information.target.canAttackAirUnits) {
      this.airBadge = 'primary'
    } 
    else {
      this.airBadge = 'danger'
    }
    if(this.unit.information.target.canAttackGroundUnits) {
      this.groundBadge = 'primary'
    } 
    else {
      this.groundBadge = 'danger'
    }
  }
  
  initAssets() {
    if (this.unit.race.type == SC2RaceType.PROTOSS) {
      this.minerals_img = 'assets/icon/ressources/protoss/minerals.gif';
      this.gas_img = 'assets/icon/ressources/protoss/gas.gif';
      this.buildtime_img = 'assets/icon/ressources/protoss/buildtime.gif';
      this.supply_img = 'assets/icon/ressources/protoss/supply.gif';
    }
    else if (this.unit.race.type == SC2RaceType.ZERG) {
      this.minerals_img = 'assets/icon/ressources/zerg/minerals.gif';
      this.gas_img = 'assets/icon/ressources/zerg/gas.gif';
      this.buildtime_img = 'assets/icon/ressources/zerg/buildtime.gif';
      this.supply_img = 'assets/icon/ressources/zerg/supply.gif';
    }
    else {
      this.minerals_img = 'assets/icon/ressources/terran/minerals.gif';
      this.gas_img = 'assets/icon/ressources/terran/gas.gif';
      this.buildtime_img = 'assets/icon/ressources/terran/buildtime.gif';
      this.supply_img = 'assets/icon/ressources/terran/supply.gif';
    }
  }
}
