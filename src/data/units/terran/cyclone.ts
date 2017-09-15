import { ATTR_ARMORED, ATTR_MECHANICAL } from '../../../model/const';
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
    PROTOSS_IMMORTAL_ID,
    PROTOSS_ZEALOT_ID,
    TERRAN_CYCLONE_ID,
    TERRAN_MARINE_ID,
    TERRAN_THOR_ID,
    ZERG_ULTRALISK_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const TERRAN_CYCLONE = new SC2Unit(
    TERRAN_CYCLONE_ID,
    'Cyclone',
    TERRAN_RACE,
    'The Cyclone is a fast hit-and-away vehicle produced from the Factory. Has a high spell damage ability ' +
    '(Ignores Armor completely) called Lock-On that is ideal against aerial, high health and/or slower ' +
    'moving targets. In the early game this unit is often seen defending alongside Missile Turrets and Marines, ' +
    'and later on raiding undefended opposing mining workers and bases with Hellions.',
    new SC2Cost(150, 100, 32, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '3', '30', '0.1', '6')],
        new SC2Defence('180', '0', '1'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    null,
    [new SC2UnitLink(PROTOSS_IMMORTAL_ID), new SC2UnitLink(ZERG_ULTRALISK_ID), new SC2UnitLink(TERRAN_THOR_ID)],
    [new SC2UnitLink(PROTOSS_ZEALOT_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(TERRAN_MARINE_ID)],
    new SC2Asset('assets/units/terran/thumbnail/cyclone.png', 'assets/units/terran/image/cyclone.png')
);