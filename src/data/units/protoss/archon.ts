import { ATTR_MASSIVE, ATTR_PSIONIC, KEY_C } from '../../../model/const';
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
import { PROTOSS_ARCHON_ID, PROTOSS_IMMORTAL_ID, TERRAN_THOR_ID, ZERG_MUTALISK_ID, ZERG_ULTRALISK_ID } from '../const';


export const PROTOSS_ARCHON = new SC2Unit(
    PROTOSS_ARCHON_ID,
    'Archon',
    PROTOSS_RACE,
    'The Archon is a powerful Protoss short-range unit. It excels against ' +
    'biological units and structures. An Archon is created when two of either ' +
    'Dark Templar or High Templar merge together on the battlefield; ' +
    'the Archon cannot be produced at any building. Archons can attack air ' +
    'or ground units and deal area-of-effect damage.',
    new SC2Cost(0, 0, 9, 4),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_PSIONIC, ATTR_MASSIVE],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '25', '20', '1.25', '3')],
        new SC2Defence('10', '350', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source('Dark templar / High templar', SourceType.UNIT, KEY_C),
    [new SC2UnitLink(ZERG_MUTALISK_ID)],
    [new SC2UnitLink(TERRAN_THOR_ID), new SC2UnitLink(ZERG_ULTRALISK_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/archon.png', 'assets/units/protoss/image/archon.jpg')
);