import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Attack,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MASSIVE, ATTR_MECHANICAL, ATTR_PSIONIC } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_MOTHERSHIP = new SC2Unit(
    'eabd93e7-c5e3-4a07-9222-9c2c4d519246',
    'Mothership',
    PROTOSS_RACE,
    'The Mothership is the most powerful unit in the Protoss arsenal: Once a Fleet Beacon ' +
    'has been built, it may be transformed from the Mothership Core. Because of its extensive ' +
    'capabilities, the Mothership has a unique restriction: only one can be deployed by each player at a time.',
    new SC2Cost(300, 300, 100, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '6', '22.8', '1.58', '7')],
        new SC2Defence('350', '350', '2'),
        new SC2Energy('50', '200'),
        new SC2Speed('2.62'),
        new SC2Sight('14'),
        null
    ),
    null,
    // TODO: Add source for mothership
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/mothership.png', 'assets/units/protoss/image/mothership.jpg')
);