import { SC2Target } from '../../model/sc2unitinformation';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NotFoundPage } from '../404NotFound/404';
import { SC2_UNITS } from '../../data/units/units';
import { SC2Unit } from '../../model/sc2unit';
import { SC2RaceType } from '../../model/sc2races';

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
  strongAgainst: Array<SC2Unit> = [];
  weakAgainst: Array<SC2Unit> = [];

  // booleans to dynamically display informations on units
  canAttack: boolean;
  hasShield: boolean;
  hasEnergy: boolean;
  hasCargo: boolean;
  hasBuilding: boolean;
  canAttackAirUnits: boolean;
  canAttackGroundUnits: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl
    this.id = this.navParams.get('id');
    let unitMatchingId = this.getUnitFromId(this.id);
    if (unitMatchingId == null || unitMatchingId == undefined) {
      this.nav.setRoot(NotFoundPage);
    }
    else {
      // development only
      this.unit = unitMatchingId;
      console.log(this.unit);
      this.initCargo();
      this.initShield();
      this.initEnergy();
      this.initAttack();
      this.initTargets();
      this.initAssets();
      this.initBuilding();
      for(let link of this.unit.strongAgainst) {
        let strongUnit = this.getUnitFromId(link.id)
        if (strongUnit != null) {
          this.strongAgainst.push(strongUnit);
        }
      }
      for(let link of this.unit.weakAgainst) {
        let weakUnit = this.getUnitFromId(link.id)
        if (weakUnit != null) {
          this.weakAgainst.push(weakUnit);
        }
      }
    }
  }

  initTargets() {
    this.canAttackAirUnits = false;
    this.airBadge = 'danger';
    this.canAttackGroundUnits = false;
    this.groundBadge = 'danger';
    if (this.unit.information.targets.indexOf(SC2Target.AIR) !== -1) {
      this.canAttackAirUnits = true;
      this.airBadge = 'primary';
    } 
    if (this.unit.information.targets.indexOf(SC2Target.GROUND) !== -1) {
      this.canAttackGroundUnits = true;
      this.groundBadge = 'primary';
    }
  }

  initCargo() {
    this.hasCargo = false;
    if (this.unit.information.cargo != null) {
      this.hasCargo = true;
    }
  }

  initShield() {
    this.hasShield = false;
    if (this.unit.race.type == SC2RaceType.PROTOSS) {
      this.hasShield = true;
    }
  }

  initEnergy() {
    this.hasEnergy = false;
    if (this.unit.information.energy != null) {
      this.hasEnergy = true;
    }
  }

  initAttack() {
    this.canAttack = true
    if (this.unit.information.attacks == null) {
      this.canAttack = false;
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

  initBuilding() {
    if (this.unit.source == null) {
      this.hasBuilding = false;
    }
    else {
      this.hasBuilding = true;
    }
  }

  parseTarget(target: SC2Target): string {
    if (target == SC2Target.GROUND) {
      return 'Ground';
    }
    else if (target == SC2Target.AIR) {
      return 'Air';
    }
    else if (target == SC2Target.BUILDING) {
      return 'Building';
    }
    else {
      return null
    }
  }

  getUnitFromId(id: string): SC2Unit {
    let unitsMatchingId = SC2_UNITS.filter(unit => unit.id == id);
    if(unitsMatchingId.length > 1) {
      // > 1 unit matching provided id
      console.log('Multiple units matching provided id!');
      return null
    } 
    else if (unitsMatchingId.length == -1) {
      // 0 unit matching provided id
      return null
    }
    return unitsMatchingId[0];
  }

  goToUnitPage(id: string) {
    this.nav.push(UnitPage, {
      id: id
    })
  }
}
