import { PROTOSS_PROBE } from './protoss/probe';
import { PROTOSS_ZEALOT } from './protoss/zealot';
import { PROTOSS_STALKER } from './protoss/stalker';
import { PROTOSS_SENTRY } from './protoss/sentry';
import { PROTOSS_ADEPT } from './protoss/adept';
import { PROTOSS_HIGH_TEMPLAR } from './protoss/high-templar';
import { PROTOSS_DARK_TEMPLAR } from './protoss/dark-templar';
import { PROTOSS_IMMORTAL } from './protoss/immortal';
import { PROTOSS_COLOSSUS } from './protoss/colossus';
import { PROTOSS_DISRUPTOR } from './protoss/disruptor';
import { PROTOSS_ARCHON } from './protoss/archon';
import { PROTOSS_OBSERVER } from './protoss/observer';
import { PROTOSS_WARP_PRISM } from './protoss/warp-prism';
import { PROTOSS_PHOENIX } from './protoss/phoenix';
import { PROTOSS_VOID_RAY } from './protoss/void-ray';
import { PROTOSS_ORACLE } from './protoss/oracle';
import { PROTOSS_CARRIER } from './protoss/carrier';
import { PROTOSS_TEMPEST } from './protoss/tempest';
import { PROTOSS_MOTHERSHIP_CORE } from './protoss/mothership-core';
import { PROTOSS_MOTHERSHIP } from './protoss/mothership';
import { ZERG_LARVA } from './zerg/larva';
import { ZERG_DRONE } from './zerg/drone';
import { ZERG_QUEEN } from './zerg/queen';
import { ZERG_ZERGLING } from './zerg/zergling';
import { ZERG_BANELING } from './zerg/baneling';
import { ZERG_ROACH } from './zerg/roach';
import { ZERG_RAVAGER } from './zerg/ravager';
import { ZERG_HYDRALISK } from './zerg/hydralisk';
import { ZERG_LURKER } from './zerg/lurker';
import { ZERG_INFESTOR } from './zerg/infestor';
import { ZERG_SWARM_HOST } from './zerg/swarm-host';
import { ZERG_ULTRALISK } from './zerg/ultralisk';
import { ZERG_LOCUST } from './zerg/locust';
import { ZERG_BROODLING } from './zerg/broodling';
import { ZERG_CHANGELING } from './zerg/changeling';
import { ZERG_NYDUS_WORM } from './zerg/nydus-worm';
import { ZERG_OVERLORD } from './zerg/overlord';
import { ZERG_OVERSEER } from './zerg/overseer';
import { ZERG_MUTALISK } from './zerg/mutalisk';
import { ZERG_CORRUPTOR } from './zerg/corruptor';
import { ZERG_BROODLORD } from './zerg/broodlord';
import { ZERG_VIPER } from './zerg/viper';
import { TERRAN_SCV } from './terran/scv';
import { TERRAN_MARINE } from './terran/marine';
import { TERRAN_MARAUDER } from './terran/marauder';
import { TERRAN_REAPER } from './terran/reaper';
import { TERRAN_GHOST } from './terran/ghost';
import { TERRAN_HELLION } from './terran/hellion';
import { TERRAN_HELLBAT } from './terran/hellbat';
import { TERRAN_SIEGE_TANK } from './terran/siege-tank';
import { TERRAN_CYCLONE } from './terran/cyclone';
import { TERRAN_WIDOW_MINE } from './terran/widow-mine';
import { TERRAN_THOR } from './terran/thor';
import { TERRAN_VIKING } from './terran/viking';
import { TERRAN_MEDIVAC } from './terran/medivac';
import { TERRAN_LIBERATOR } from './terran/liberator';
import { TERRAN_RAVEN } from './terran/raven';
import { TERRAN_BANSHEE } from './terran/banshee';
import { TERRAN_BATTLE_CRUISER } from './terran/battle-cruiser';


// TODO: Units not added at the moment 

// new SC2Unit(
//     '6f674e6e-b904-4c18-9acf-3a6b0c79a999', 
//     'Mule',
//     TERRAN_RACE,
//     '', 
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/terran/thumbnail/scv.png', 'assets/units/terran/image/mule.jpg')
// ),

// new SC2Unit(
//     '9bc1417d-8649-4c0f-bca7-0a5985b86a72',
//     'Auto-Turret',
//     TERRAN_RACE,
//     '', 
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/terran/thumbnail/auto-turret.png', null)
// ),

// new SC2Unit(
//     '32fc8e1f-fa2a-4fc7-85dc-0e55d97df97d',
//     'Point Defense Drone',
//     TERRAN_RACE,
//     '', 
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/terran/thumbnail/scv.png', null)
// )

export const SC2_UNITS = [
    PROTOSS_PROBE,
    PROTOSS_ZEALOT,
    PROTOSS_STALKER,
    PROTOSS_SENTRY,
    PROTOSS_ADEPT,
    PROTOSS_HIGH_TEMPLAR,
    PROTOSS_DARK_TEMPLAR,
    PROTOSS_IMMORTAL,
    PROTOSS_COLOSSUS,
    PROTOSS_DISRUPTOR,
    PROTOSS_ARCHON,
    PROTOSS_OBSERVER,
    PROTOSS_WARP_PRISM,
    PROTOSS_PHOENIX,
    PROTOSS_VOID_RAY,
    PROTOSS_ORACLE,
    PROTOSS_CARRIER,
    PROTOSS_TEMPEST,
    PROTOSS_MOTHERSHIP_CORE,
    PROTOSS_MOTHERSHIP,
    ZERG_LARVA,
    ZERG_DRONE,
    ZERG_QUEEN,
    ZERG_ZERGLING,
    ZERG_BANELING,
    ZERG_ROACH,
    ZERG_RAVAGER,
    ZERG_HYDRALISK,
    ZERG_LURKER,
    ZERG_INFESTOR,
    ZERG_SWARM_HOST,
    ZERG_ULTRALISK,
    ZERG_LOCUST,
    ZERG_BROODLING,
    ZERG_CHANGELING,
    ZERG_NYDUS_WORM,
    ZERG_OVERLORD,
    ZERG_OVERSEER,
    ZERG_MUTALISK,
    ZERG_CORRUPTOR,
    ZERG_BROODLORD,
    ZERG_VIPER,
    TERRAN_SCV,
    TERRAN_MARINE,
    TERRAN_MARAUDER,
    TERRAN_REAPER,
    TERRAN_GHOST,
    TERRAN_HELLION,
    TERRAN_HELLBAT,
    TERRAN_SIEGE_TANK,
    TERRAN_CYCLONE,
    TERRAN_WIDOW_MINE,
    TERRAN_THOR,
    TERRAN_VIKING,
    TERRAN_MEDIVAC,
    TERRAN_LIBERATOR,
    TERRAN_RAVEN,
    TERRAN_BANSHEE,
    TERRAN_BATTLE_CRUISER
]