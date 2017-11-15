import { ATTR_ARMORED, ATTR_MASSIVE, ATTR_MECHANICAL, KEY_C, STARGATE } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { PROTOSS_RACE } from '../../races/races';
import {
    PROTOSS_CARRIER_ID,
    PROTOSS_PHOENIX_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_THOR_ID,
    TERRAN_VIKING_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_MUTALISK_ID,
} from '../const';


// // TODO: Better handle carrier interceptors and whatever
export const PROTOSS_CARRIER = new SC2Unit(
    PROTOSS_CARRIER_ID,
    'Carrier',
    PROTOSS_RACE,
    'Carriers are the capital ships in the Protoss air force, built at the Stargate with the ' +
    'Fleet Beacon as a prerequisite. Unlike other units, Carriers do not engage the enemy directly. ' +
    'Instead, they launch tiny Interceptors that attack in a swarm around the Carrier.',
    new SC2Cost(350, 250, 86, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '5', '37.4', '2.14', '8')],
        new SC2Defence('250', '150', '0'),
        null,
        new SC2Speed('2.62'),
        new SC2Sight('12'),
        null
    ),
    null,
    new SC2Source(STARGATE, SourceType.BUILDING, KEY_C),
    [new SC2UnitLink(TERRAN_THOR_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_PHOENIX_ID)],
    [new SC2UnitLink(TERRAN_VIKING_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    new SC2Asset('assets/units/protoss/thumbnail/carrier.png', 'assets/units/protoss/image/carrier.jpg')
);