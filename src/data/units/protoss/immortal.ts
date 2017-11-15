import { ATTR_ARMORED, ATTR_MECHANICAL, KEY_I, ROBOTICS } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
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
import { PROTOSS_RACE } from '../../races/races';
import {
    PROTOSS_IMMORTAL_ID,
    PROTOSS_STALKER_ID,
    PROTOSS_ZEALOT_ID,
    TERRAN_MARINE_ID,
    TERRAN_SIEGE_TANK_ID,
    ZERG_ROACH_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const PROTOSS_IMMORTAL = new SC2Unit(
    PROTOSS_IMMORTAL_ID,
    'Immortal',
    PROTOSS_RACE,
    'The Immortal is a powerful, ranged, mechanized assault strider for the Protoss' +
    'army, produced at the Robotics Facility. Their Barrier ability makes them ' +
    'specialists at dealing with any high-powered armored unit whose attack deals ' +
    'a large amount of damage such as Siege Tanks, Ultralisks, or Marauders.',
    new SC2Cost(250, 100, 39, 4),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '20', '19.2', '1.04', '6')],
        new SC2Defence('200', '100', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(ROBOTICS, SourceType.BUILDING, KEY_I),
    [new SC2UnitLink(TERRAN_SIEGE_TANK_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(PROTOSS_STALKER_ID)],
    [new SC2UnitLink(TERRAN_MARINE_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_ZEALOT_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/immortal.png', 'assets/units/protoss/image/immortal.jpg')
);
