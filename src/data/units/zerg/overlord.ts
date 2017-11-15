import { ATTR_ARMORED, ATTR_BIOLOGICAL, HATCHERY, KEY_V } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Defence, SC2Sight, SC2Speed, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ZERG_RACE } from '../../races/races';
import { ZERG_OVERLORD_ID } from '../const';


export const ZERG_OVERLORD = new SC2Unit(
    ZERG_OVERLORD_ID,
    'Overlord',
    ZERG_RACE,
    'The Overlord is the Zerg\'s supply unit and is the equivalent of the Terran\'s Supply Depot ' +
    'and the Protoss Pylon. The Overlord provides the Zerg player with 8 supply. More must ' +
    'be built to create additional units.',
    new SC2Cost(100, 0, 18, 0),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        null,
        new SC2Defence('200', '0', '0'),
        null,
        new SC2Speed('0.82'),
        new SC2Sight('11'),
        null
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_V),
    [],
    [],
    new SC2Asset('assets/units/zerg/thumbnail/overlord.png', 'assets/units/zerg/image/overlord.jpg')
);