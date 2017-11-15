import { ATTR_ARMORED, ATTR_MASSIVE, ATTR_MECHANICAL, KEY_C, ROBOTICS } from '../../../model/const';
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
    TERRAN_MARINE_ID,
    TERRAN_VIKING_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const PROTOSS_COLOSSUS = new SC2Unit(
    PROTOSS_COLOSSUS_ID,
    'Colossus',
    PROTOSS_RACE,
    'The Colossus is a massive Protoss battle strider that towers ' +
    'over all other ground units on the battlefield.',
    new SC2Cost(300, 200, 54, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
        [new SC2Attack([SC2Target.GROUND], '12', '22.4', '1.07', '6')],
        new SC2Defence('200', '150', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '8')
    ),
    null,
    new SC2Source(ROBOTICS, SourceType.BUILDING, KEY_C),
    [new SC2UnitLink(TERRAN_MARINE_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_ZEALOT_ID)],
    [new SC2UnitLink(TERRAN_VIKING_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(PROTOSS_IMMORTAL_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/colossus.png', 'assets/units/protoss/image/colossus.jpg')
);