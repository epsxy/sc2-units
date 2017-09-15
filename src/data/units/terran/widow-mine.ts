import { ATTR_LIGHT, ATTR_MECHANICAL } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import {
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
    PROTOSS_OBSERVER_ID,
    TERRAN_MARAUDER_ID,
    TERRAN_RAVEN_ID,
    TERRAN_WIDOW_WIME_ID,
    ZERG_OVERSEER_ID,
    ZERG_ROACH_ID,
} from '../const';


export const TERRAN_WIDOW_MINE = new SC2Unit(
    TERRAN_WIDOW_WIME_ID,
    'Widow Mine',
    TERRAN_RACE,
    'A Light Mechanical mine produced from the Factory with a Reactor. Must Burrow into the ground before it ' +
    'can use the "Activate Mine" ability to cause Splash damage ground or air units. Deals fixed Spell damage ' +
    '(ignores Armor upgrades) to both the primary target and splash, takes 29 seconds to load the next attack, ' +
    'and can only fire while Burrowed underground. Has a slight attack delay before casting "Activate Mine," and ' +
    'is vulnerable to fast units like Mutalisk and Adepts - if they have enough units to one-shot a Mine, ' +
    'they will be unharmed.',
    new SC2Cost(75, 25, 29, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [],
        // [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '125', '0', '0', '0')],
        new SC2Defence('90', '0', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('7'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(PROTOSS_IMMORTAL_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(TERRAN_MARAUDER_ID)],
    [new SC2UnitLink(PROTOSS_OBSERVER_ID), new SC2UnitLink(ZERG_OVERSEER_ID), new SC2UnitLink(TERRAN_RAVEN_ID)],
    new SC2Asset('assets/units/terran/thumbnail/widow-mine.png', 'assets/units/terran/image/widow-mine.jpg')
);