import { PROTOSS_ADEPT_ID } from '../const';
import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
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
import { ATTR_BIOLOGICAL, ATTR_LIGHT, GATEWAY, KEY_H } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_ADEPT = new SC2Unit(
    PROTOSS_ADEPT_ID,
    'Adept',
    PROTOSS_RACE,
    'The Adept is a ranged Protoss ground unit with a ground-only ' +
    'attack, which is warped in at the Gateway.',
    new SC2Cost(100, 25, 27, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '10', '6.2', '1.61', '4')],
        new SC2Defence('70', '70', '1'),
        null,
        new SC2Speed('3.5'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_H),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/adept.png', 'assets/units/protoss/image/adept.png')
);