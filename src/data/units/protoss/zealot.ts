import { ATTR_LIGHT, ATTR_MECHANICAL, GATEWAY, KEY_Z } from '../../../model/const';
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
    PROTOSS_COLOSSUS_ID,
    PROTOSS_IMMORTAL_ID,
    PROTOSS_ZEALOT_ID,
    TERRAN_HELLION_ID,
    TERRAN_MARAUDER_ID,
    ZERG_ROACH_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const PROTOSS_ZEALOT = new SC2Unit(
    PROTOSS_ZEALOT_ID,
    'Zealot',
    PROTOSS_RACE,
    'The first and strongest unit of direct army attacks. ' +
    'A strong brute-force unit and excellent mineral dump as well.',
    new SC2Cost(100, 0, 27, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '8', '18.6', '0.86', '0.1')],
        new SC2Defence('100', '50', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_Z),
    [
        new SC2UnitLink(TERRAN_MARAUDER_ID),
        new SC2UnitLink(ZERG_ZERGLING_ID),
        new SC2UnitLink(PROTOSS_IMMORTAL_ID)
    ],
    [
        new SC2UnitLink(TERRAN_HELLION_ID),
        new SC2UnitLink(ZERG_ROACH_ID),
        new SC2UnitLink(PROTOSS_COLOSSUS_ID)
    ],
    new SC2Asset('assets/units/protoss/thumbnail/zealot.png', 'assets/units/protoss/image/zealot.jpg')
);