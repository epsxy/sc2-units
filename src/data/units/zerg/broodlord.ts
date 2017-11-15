import { ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_MASSIVE } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_STALKER_ID,
    PROTOSS_VOID_RAY_ID,
    TERRAN_MARINE_ID,
    TERRAN_VIKING_ID,
    ZERG_BROODLORD_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_HYDRALISK_ID,
} from '../const';


export const ZERG_BROODLORD = new SC2Unit(
    ZERG_BROODLORD_ID,
    'Brood Lord',
    ZERG_RACE,
    'The Brood Lord is a flying heavy-assault Zerg air-to-ground unit that spawns Broodlings ' +
    'when it attacks. The Brood Lord can be morphed from a Corruptor once the Zerg player ' +
    'has made a Greater Spire.',
    new SC2Cost(150, 150, 24, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_MASSIVE],
        [new SC2Attack([SC2Target.GROUND], '20', '11.2', '1.79', '10')],
        new SC2Defence('225', '0', '1'),
        null,
        new SC2Speed('1.97'),
        new SC2Sight('12'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(TERRAN_MARINE_ID), new SC2UnitLink(ZERG_HYDRALISK_ID), new SC2UnitLink(PROTOSS_STALKER_ID)],
    [new SC2UnitLink(TERRAN_VIKING_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(PROTOSS_VOID_RAY_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/brood-lord.png', 'assets/units/zerg/image/brood-lord.jpg')
);