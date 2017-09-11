import { SC2Unit } from '../../../model/sc2unit';
import { ZERG_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_LIGHT } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const ZERG_BROODLING = new SC2Unit(
    '42995dff-9e7c-4f43-a1c8-fdb7305dd80e',
    'Broodling',
    ZERG_RACE,
    'The Broodling is a small Zerg unit that is spawned when either a Zerg tech building, ' +
    'for example a Hatchery or Spawning Pool, is destroyed, or when a Brood Lord attacks ' +
    'an enemy unit. A Broodling is a temporary unit and once its duration bar (by default ' +
    '8 game seconds) is depleted the unit will die, regardless of health.',
    new SC2Cost(0, 0, 0, 0),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '4', '8.7', '0.46', '0.1')],
        new SC2Defence('30', '0', '0'),
        null,
        new SC2Speed('5.37'),
        new SC2Sight('7'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/broodling.png', 'assets/units/zerg/image/broodling.jpg')
);