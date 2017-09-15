import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { TERRAN_RACE } from '../../races/races';
import {
    PROTOSS_COLOSSUS_ID,
    PROTOSS_IMMORTAL_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_MARINE_ID,
    TERRAN_SIEGE_TANK_ID,
    ZERG_BANELING_ID,
    ZERG_HYDRALISK_ID,
} from '../const';


export const TERRAN_MARINE = new SC2Unit(
    TERRAN_MARINE_ID,
    'Marine',
    TERRAN_RACE,
    'Marines are the all-purpose infantry unit produced from a Barracks with a Reactor. Having the ' +
    'quickest and cheapest production of all Terran units make the Mineral backbone that scales very ' +
    'well with Stimpack Engineering Bay upgrades and Medivacs from the Starport. Before Stimpack, ' +
    'Marines are less than effective against Zerglings and Zealots; at least one Bunker and Supply ' +
    'Depots to wall-off is recommended for the early game.',
    new SC2Cost(50, 0, 18, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '6', '9.8', '0.61', '5')],
        new SC2Defence('45', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [new SC2UnitLink(PROTOSS_IMMORTAL_ID), new SC2UnitLink(ZERG_HYDRALISK_ID), new SC2UnitLink(TERRAN_MARAUDER_ID)],
    [new SC2UnitLink(PROTOSS_COLOSSUS_ID), new SC2UnitLink(ZERG_BANELING_ID), new SC2UnitLink(TERRAN_SIEGE_TANK_ID)],
    new SC2Asset('assets/units/terran/thumbnail/marine.png', 'assets/units/terran/image/marine.jpg')
);