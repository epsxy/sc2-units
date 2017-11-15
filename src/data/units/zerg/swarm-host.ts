import { ATTR_ARMORED, ATTR_BIOLOGICAL, HATCHERY, KEY_A } from '../../../model/const';
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
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_ARCHON_ID,
    PROTOSS_STALKER_ID,
    TERRAN_HELLION_ID,
    TERRAN_MARINE_ID,
    ZERG_BANELING_ID,
    ZERG_ROACH_ID,
    ZERG_SWARM_HOST_ID,
} from '../const';


export const ZERG_SWARM_HOST = new SC2Unit(
    ZERG_SWARM_HOST_ID,
    'Swarm Host',
    ZERG_RACE,
    'The Swarm Host is a Zerg siege unit that requires an Infestation Pit. It attacks ' +
    'in the form of waves of two Locusts that spawn with a manually cast ability. The ' +
    'Locusts are slow moving ground-to-ground units with a timed life that nonetheless ' +
    'extend the range of the Swarm Host beyond that of any other unit. The Locusts are ' +
    'able to spawn as flying units.',
    new SC2Cost(100, 75, 29, 3),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        [],
        new SC2Defence('160', '0', '1'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_A),
    [new SC2UnitLink(TERRAN_MARINE_ID), new SC2UnitLink(PROTOSS_STALKER_ID), new SC2UnitLink(ZERG_ROACH_ID)],
    [new SC2UnitLink(ZERG_BANELING_ID), new SC2UnitLink(TERRAN_HELLION_ID), new SC2UnitLink(PROTOSS_ARCHON_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/swarm-host.png', 'assets/units/zerg/image/swarm-host.jpg')
);