import { ATTR_LIGHT, ATTR_MECHANICAL } from '../../../model/const';
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
    PROTOSS_STALKER_ID,
    PROTOSS_ZEALOT_ID,
    TERRAN_HELLION_ID,
    TERRAN_MARAUDER_ID,
    ZERG_ROACH_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const TERRAN_HELLION = new SC2Unit(
    TERRAN_HELLION_ID,
    'Hellion',
    TERRAN_RACE,
    'A fast expansion-raiding unit and anti-Melee unit when transformed into Hellbats. With a line ' +
    'of effect attack, the same range as a Marine\'s attack, Hellions excel at fighting in Choke ' +
    'Points on maps. With a very slow cooldown on attack and fast movement speed, this unit requires ' +
    'a lot of attention and micro-management to be effective.',
    new SC2Cost(100, 0, 21, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '8', '4.48', '1.79', '5')],
        new SC2Defence('90', '0', '0'),
        null,
        new SC2Speed('5.95'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(PROTOSS_ZEALOT_ID), new SC2UnitLink(ZERG_ZERGLING_ID)],
    [new SC2UnitLink(PROTOSS_STALKER_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(TERRAN_MARAUDER_ID)],
    new SC2Asset('assets/units/terran/thumbnail/hellion.png', 'assets/units/terran/image/hellion.jpg')
);