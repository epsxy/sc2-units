import { ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_MASSIVE, HATCHERY, KEY_U } from '../../../model/const';
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
    PROTOSS_STALKER_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_BANSHEE_ID,
    TERRAN_MARAUDER_ID,
    ZERG_MUTALISK_ID,
    ZERG_ROACH_ID,
    ZERG_ULTRALISK_ID,
} from '../const';


export const ZERG_ULTRALISK = new SC2Unit(
    ZERG_ULTRALISK_ID,
    'Ultralisk',
    ZERG_RACE,
    'The Ultralisk is the Zerg\'s toughest late-game unit in StarCraft II. It ' +
    'can only be made once the Hive is researched and an Ultralisk Cavern is made.',
    new SC2Cost(300, 200, 39, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_MASSIVE],
        [new SC2Attack([SC2Target.GROUND], '35', '57.38', '0.61', '1')],
        new SC2Defence('500', '0', '2'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('19'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '8')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_U),
    [new SC2UnitLink(TERRAN_MARAUDER_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(PROTOSS_STALKER_ID)],
    [new SC2UnitLink(TERRAN_BANSHEE_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/ultralisk.png', 'assets/units/zerg/image/ultralisk.jpg')
)