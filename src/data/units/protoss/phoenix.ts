import { ATTR_LIGHT, ATTR_MECHANICAL, KEY_X, STARGATE } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import {
    SC2Attack,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { PROTOSS_RACE } from '../../races/races';
import {
    PROTOSS_CARRIER_ID,
    PROTOSS_PHOENIX_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_BANSHEE_ID,
    TERRAN_BATTLE_CRUISER_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_MUTALISK_ID,
} from '../const';


export const PROTOSS_PHOENIX = new SC2Unit(
    PROTOSS_PHOENIX_ID,
    'Phoenix',
    PROTOSS_RACE,
    'The Phoenix is a speedy Protoss air-to-air fighter, which warps in at ' +
    'the Stargate. Phoenixes can attack other air units while moving, granting ' +
    'an upper hand against enemy air units that rely on hit and away tactics.',
    new SC2Cost(150, 100, 25, 2),
    new SC2UnitInformation(
        [SC2Target.AIR],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.AIR], '5', '12.7', '0.79', '5')],
        new SC2Defence('120', '60', '0'),
        new SC2Energy('50', '200'),
        new SC2Speed('0'),
        new SC2Sight('0'),
        null
    ),
    null,
    new SC2Source(STARGATE, SourceType.BUILDING, KEY_X),
    [new SC2UnitLink(TERRAN_BANSHEE_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    [new SC2UnitLink(TERRAN_BATTLE_CRUISER_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(PROTOSS_CARRIER_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/phoenix.png', 'assets/units/protoss/image/phoenix.jpg')
);