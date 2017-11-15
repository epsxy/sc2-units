import { ATTR_BIOLOGICAL, ATTR_LIGHT, HATCHERY, KEY_H } from '../../../model/const';
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
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_COLOSSUS_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_BANSHEE_ID,
    TERRAN_SIEGE_TANK_ID,
    ZERG_HYDRALISK_ID,
    ZERG_MUTALISK_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const ZERG_HYDRALISK = new SC2Unit(
    ZERG_HYDRALISK_ID,
    'Hydralisk',
    ZERG_RACE,
    'The Hydralisk is a ranged Lair-tech unit that can be after building a Hydralisk Den. The ' +
    'Hydralisk\'s fast attack and high damage make it effective at dealing consistent to ground ' +
    'and air unit in the game. Can morph into the Lurker after morphing the Hydralisk Den into a ' +
    'Lurker Den.',
    new SC2Cost(100, 50, 24, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '12', '22.4', '0.54', '5')],
        new SC2Defence('90', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_H),
    [new SC2UnitLink(TERRAN_BANSHEE_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    [new SC2UnitLink(TERRAN_SIEGE_TANK_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_COLOSSUS_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/hydralisk.png', 'assets/units/zerg/image/hydralisk.jpg')
);