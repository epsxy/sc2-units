import { PROTOSS_VOID_RAY_ID } from '../const';
import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MECHANICAL, KEY_V, STARGATE } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_VOID_RAY = new SC2Unit(
    PROTOSS_VOID_RAY_ID,
    'Void Ray',
    PROTOSS_RACE,
    'The Void Ray is an airborne siege cannon for the Protoss ' +
    'that is built at the Stargate. ',
    new SC2Cost(250, 150, 43, 4),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '6', '16.8', '0.36', '6')],
        new SC2Defence('150', '100', '0'),
        null,
        new SC2Speed('3.5'),
        new SC2Sight('10'),
        null
    ),
    null,
    new SC2Source(STARGATE, SourceType.BUILDING, KEY_V),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/void-ray.png', 'assets/units/protoss/image/void-ray.jpg')
);