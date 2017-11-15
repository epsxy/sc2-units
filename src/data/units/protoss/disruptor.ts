import { ATTR_ARMORED, ATTR_MECHANICAL, KEY_D, ROBOTICS } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import {
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
    PROTOSS_DISRUPTOR_ID,
    PROTOSS_IMMORTAL_ID,
    PROTOSS_PROBE_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_THOR_ID,
    ZERG_HYDRALISK_ID,
    ZERG_ULTRALISK_ID,
} from '../const';


export const PROTOSS_DISRUPTOR = new SC2Unit(
    PROTOSS_DISRUPTOR_ID,
    'Disruptor',
    PROTOSS_RACE,
    'The Disruptor is a robotic disruption unit. The Disruptor is extremely potent ' +
    'versus any force that clumps its units together, as well as against worker lines.',
    new SC2Cost(150, 150, 36, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [],
        new SC2Defence('100', '100', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(ROBOTICS, SourceType.BUILDING, KEY_D),
    [new SC2UnitLink(TERRAN_MARAUDER_ID), new SC2UnitLink(ZERG_HYDRALISK_ID), new SC2UnitLink(PROTOSS_PROBE_ID)],
    [new SC2UnitLink(TERRAN_THOR_ID), new SC2UnitLink(ZERG_ULTRALISK_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/disruptor.png', 'assets/units/protoss/image/disruptor.png')
);