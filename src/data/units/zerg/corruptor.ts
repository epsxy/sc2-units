import { ATTR_BIOLOGICAL, ATTR_LIGHT } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_PHOENIX_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_BATTLE_CRUISER_ID,
    TERRAN_VIKING_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_HYDRALISK_ID,
    ZERG_MUTALISK_ID,
} from '../const';


export const ZERG_CORRUPTOR = new SC2Unit(
    ZERG_CORRUPTOR_ID,
    'Corruptor',
    ZERG_RACE,
    'The Corruptor is a flying Zerg unit that has strong anti-air capabilities but slow speed. ' +
    'They are also distinguished from Mutalisk by their greater range and huge health pool, ' +
    'as well as their inability to attack ground. They are effective in any case where they ' +
    'can force engagements: against capital ships, for example; inversely, when they cannot, ' +
    'and especially when they are outranged, as by Phoenixes, they tend to be a weak air ' +
    'unit for that situation.',
    new SC2Cost(150, 100, 29, 2),
    new SC2UnitInformation(
        [SC2Target.AIR],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.AIR], '9', '8.26', '1.09', '3')],
        new SC2Defence('200', '0', '2'),
        null,
        new SC2Speed('4.725'),
        new SC2Sight('10'),
        null
    ),
    null,
    // new SC2Source(HATCHERY, KEY_C),
    null,
    [new SC2UnitLink(TERRAN_BATTLE_CRUISER_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_PHOENIX_ID)],
    [new SC2UnitLink(TERRAN_VIKING_ID), new SC2UnitLink(ZERG_HYDRALISK_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/corruptor.png', 'assets/units/zerg/image/corruptor.jpg')
);