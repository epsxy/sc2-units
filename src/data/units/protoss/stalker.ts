import { ATTR_ARMORED, ATTR_MECHANICAL, GATEWAY, KEY_S } from '../../../model/const';
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
    PROTOSS_VOID_RAY_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_REAPER_ID,
    ZERG_MUTALISK_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const PROTOSS_STALKER = new SC2Unit(
    PROTOSS_STALKER_ID,
    'Stalker',
    PROTOSS_RACE,
    'The Stalker is a fast-moving, ranged Protoss ground unit, ' +
    'capable of hitting both air and ground targets. ' +
    'They are warped in at the Gateway, and require a Cybernetics Core.',
    new SC2Cost(125, 50, 30, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '10', '9.7', '1.03', '6')],
        new SC2Defence('80', '80', '1'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_S),
    [new SC2UnitLink(TERRAN_REAPER_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    [new SC2UnitLink(TERRAN_MARAUDER_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/stalker.png', 'assets/units/protoss/image/stalker.jpg')
);