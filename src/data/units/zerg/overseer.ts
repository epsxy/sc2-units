import { ATTR_ARMORED, ATTR_BIOLOGICAL } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Defence, SC2Energy, SC2Sight, SC2Speed, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { ZERG_RACE } from '../../races/races';
import {
    PROTOSS_DARK_TEMPLAR_ID,
    PROTOSS_STALKER_ID,
    TERRAN_BANSHEE_ID,
    TERRAN_VIKING_ID,
    ZERG_MUTALISK_ID,
    ZERG_OVERSEER_ID,
    ZERG_ROACH_ID,
} from '../const';


export const ZERG_OVERSEER = new SC2Unit(
    ZERG_OVERSEER_ID,
    'Overseer',
    ZERG_RACE,
    'The Overseer is a Zerg unit that is morphed from an Overlord. The Overseer has some ' +
    'abilities which the Overlord does not have: the ability to Detect invisible units, ' +
    'spawn Changelings and Contaminate. The Overseer is extremely useful for scouting ' +
    'and detecting enemy units/positions. The Overseer moves faster than the Overlord ' +
    'and also receives the benefit of the Pneumatized Carapace upgrade.',
    new SC2Cost(50, 50, 12, 0),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        null,
        new SC2Defence('200', '0', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('2.62'),
        new SC2Sight('11'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(TERRAN_BANSHEE_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(PROTOSS_DARK_TEMPLAR_ID)],
    [new SC2UnitLink(TERRAN_VIKING_ID), new SC2UnitLink(ZERG_MUTALISK_ID), new SC2UnitLink(PROTOSS_STALKER_ID)],
    new SC2Asset('assets/units/zerg/thumbnail/overseer.png', 'assets/units/zerg/image/overseer.jpg')
);