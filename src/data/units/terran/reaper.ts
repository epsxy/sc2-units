import { ATTR_BIOLOGICAL, ATTR_LIGHT } from '../../../model/const';
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
    PROTOSS_PROBE_ID,
    PROTOSS_STALKER_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_REAPER_ID,
    TERRAN_SCV_ID,
    ZERG_DRONE_ID,
    ZERG_ROACH_ID,
} from '../const';


export const TERRAN_REAPER = new SC2Unit(
    TERRAN_REAPER_ID,
    'Reaper',
    TERRAN_RACE,
    'The Reaper is a Lightly Armored scouting units with excellent freedom of movement, with an ' +
    'out-of-combat Health-regeneration ability. This unit can now be produced from a Barracks and ' +
    'from a Reactor. It still remains a costly & fragile unit; avoiding enemy fire and use of Bunkers ' +
    'or escaping Melee via Cliff edges for protection is advised.',
    new SC2Cost(50, 50, 32, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '4(+1)(x2)', '10.1', '0.79', '5')],
        new SC2Defence('60', '0', '0(+1)'),
        null,
        new SC2Speed('5.25'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [new SC2UnitLink(PROTOSS_PROBE_ID), new SC2UnitLink(ZERG_DRONE_ID), new SC2UnitLink(TERRAN_SCV_ID)],
    [new SC2UnitLink(PROTOSS_STALKER_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(TERRAN_MARAUDER_ID)],
    new SC2Asset('assets/units/terran/thumbnail/reaper.png', 'assets/units/terran/image/reaper.jpg')
);