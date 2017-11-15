import { ATTR_BIOLOGICAL, HATCHERY, KEY_V } from '../../../model/const';
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
    PROTOSS_IMMORTAL_ID,
    PROTOSS_SENTRY_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_SIEGE_TANK_ID,
    ZERG_LURKER_ID,
    ZERG_RAVAGER_ID,
    ZERG_ULTRALISK_ID,
} from '../const';


export const ZERG_RAVAGER = new SC2Unit(
    ZERG_RAVAGER_ID,
    'Ravager',
    ZERG_RACE,
    'The Ravager is a ground Zerg unit, morphed out of the Roach. Its effectiveness heavily relies ' +
    'on player micro due to its corrosive bile ability. This ability can destroy Force Fields and ' +
    'can be used for harassment, e.g. if the spell is cast on workers (mineral line).',
    new SC2Cost(25, 75, 9, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '16', '14.04', '1.14', '6')],
        new SC2Defence('120', '0', '1'),
        null,
        new SC2Speed('3.85'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_V),
    [new SC2UnitLink(TERRAN_SIEGE_TANK_ID), new SC2UnitLink(ZERG_LURKER_ID), new SC2UnitLink(PROTOSS_SENTRY_ID)],
    [new SC2UnitLink(TERRAN_MARAUDER_ID), new SC2UnitLink(ZERG_ULTRALISK_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/ravager.png', 'assets/units/zerg/image/ravager.png')
);