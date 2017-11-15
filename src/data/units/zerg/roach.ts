import { ATTR_ARMORED, ATTR_BIOLOGICAL, HATCHERY, KEY_R } from '../../../model/const';
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
    PROTOSS_ZEALOT_ID,
    TERRAN_HELLION_ID,
    TERRAN_MARAUDER_ID,
    ZERG_ROACH_ID,
    ZERG_ULTRALISK_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const ZERG_ROACH = new SC2Unit(
    ZERG_ROACH_ID,
    'Roach',
    ZERG_RACE,
    'The Roach is an Armored-ground unit that can be produced after a Roach Warren has been built. ' +
    'With the Tunneling Claws upgrade, the Roach becomes one of two units (the other being the Infestor) ' +
    'that is able to move while burrowed. This is also indicated by the appearance of crystals on ' +
    'the backs of the Roaches.',
    new SC2Cost(75, 25, 19, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '16', '11.2', '1.43', '4')],
        new SC2Defence('145', '0', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_R),
    [new SC2UnitLink(TERRAN_HELLION_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_ZEALOT_ID)],
    [new SC2UnitLink(TERRAN_MARAUDER_ID), new SC2UnitLink(ZERG_ULTRALISK_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/roach.png', 'assets/units/zerg/image/roach.jpg')
);