import { ATTR_BIOLOGICAL, ATTR_PSIONIC, HATCHERY, KEY_Q } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_VOID_RAY_ID,
    PROTOSS_ZEALOT_ID,
    TERRAN_HELLION_ID,
    TERRAN_MARINE_ID,
    ZERG_MUTALISK_ID,
    ZERG_QUEEN_ID,
    ZERG_ZERGLING_ID,
} from '../const';


export const ZERG_QUEEN = new SC2Unit(
    ZERG_QUEEN_ID,
    'Queen',
    ZERG_RACE,
    'The Queen is an essential unit for the Zerg base, capable of being spawned ' +
    'from any Hatchery after a Spawning Pool has been built. The unit provides ' +
    'light defense against both ground and air threats.',
    new SC2Cost(150, 0, 36, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [
            new SC2Attack([SC2Target.GROUND], '4', '11.2', '0.71', '5'),
            new SC2Attack([SC2Target.AIR], '9', '12.6', '0.71', '8')
        ],
        new SC2Defence('175', '0', '1'),
        new SC2Energy('25', '200'),
        new SC2Speed('1.31'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_Q),
    [new SC2UnitLink(TERRAN_HELLION_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    [new SC2UnitLink(TERRAN_MARINE_ID), new SC2UnitLink(ZERG_ZERGLING_ID), new SC2UnitLink(PROTOSS_ZEALOT_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/queen.png', 'assets/units/zerg/image/queen.jpg')
);