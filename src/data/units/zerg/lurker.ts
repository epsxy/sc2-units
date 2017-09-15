import { ZERG_LURKER_ID } from '../const';
import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2CargoType, SC2Cargo } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_ARMORED, ATTR_BIOLOGICAL, HATCHERY, KEY_E } from "../../../model/const";


// Sight null ?
export const ZERG_LURKER = new SC2Unit(
    ZERG_LURKER_ID,
    'Lurker',
    ZERG_RACE,
    'The Lurker is a Zerg unit that may attack only when burrowed, and are able to burrow ' +
    'without the mutation being evolved. A Hydralisk can be morphed to a Lurker, but a Lurker ' +
    'Den is required. The Lurker deals damage to all enemy units and buildings that enter ' +
    'the line splash radius, similar to a Hellion. Each spine that spikes out of the ground ' +
    'is an individual splash zone.',
    new SC2Cost(50, 100, 18, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '20', '14.0', '1.43', '9')],
        new SC2Defence('200', '0', '1'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('0'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_E),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/lurker.png', 'assets/units/zerg/image/lurker.png')
);