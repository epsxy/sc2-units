import { ZERG_CHANGELING_ID } from '../const';
import { SC2Unit } from '../../../model/sc2unit';
import { ZERG_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Defence, SC2Sight, SC2Speed, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_LIGHT } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const ZERG_CHANGELING = new SC2Unit(
    ZERG_CHANGELING_ID,
    'Changeling',
    ZERG_RACE,
    'The Changeling is a temporary Zerg unit spawned by an Overseer that lasts for 150 ' +
    'seconds. The Changeling spawns as a Zerg-looking unit, but upon seeing an enemy ' +
    'unit or building it will automatically transform into the basic unit of that enemy\'s ' +
    'race (Marine, Zergling, or Zealot)',
    new SC2Cost(0, 0, 0, 0),
    new SC2UnitInformation(
        [],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [],
        new SC2Defence('5', '0', '0'),
        null,
        new SC2Speed('3.15 (4.13 zergling)'),
        new SC2Sight('8 (9 marine/zealot)'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/changeling.png', 'assets/units/zerg/image/changeling.jpg')
);