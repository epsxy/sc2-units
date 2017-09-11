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
import { ATTR_LIGHT, ATTR_MECHANICAL, KEY_X, STARGATE } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_PHOENIX = new SC2Unit(
    '448cd045-653c-43e9-936a-3878141aa4a8',
    'Phoenix',
    PROTOSS_RACE,
    'The Phoenix is a speedy Protoss air-to-air fighter, which warps in at ' +
    'the Stargate. Phoenixes can attack other air units while moving, granting ' +
    'an upper hand against enemy air units that rely on hit and away tactics.',
    new SC2Cost(150, 100, 25, 2),
    new SC2UnitInformation(
        [SC2Target.AIR],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.AIR], '5', '12.7', '0.79', '5')],
        new SC2Defence('120', '60', '0'),
        new SC2Energy('50', '200'),
        new SC2Speed('0'),
        new SC2Sight('0'),
        null
    ),
    null,
    new SC2Source(STARGATE, SourceType.BUILDING, KEY_X),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/phoenix.png', 'assets/units/protoss/image/phoenix.jpg')
);