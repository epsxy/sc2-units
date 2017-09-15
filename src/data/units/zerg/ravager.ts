import { ZERG_RAVAGER_ID } from '../const';
import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2Cargo, SC2CargoType } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_BIOLOGICAL, HATCHERY, KEY_V } from "../../../model/const";


export const ZERG_RAVAGER = new SC2Unit(
    ZERG_RAVAGER_ID,
    'Ravager',
    ZERG_RACE,
    'The Ravager is a ground Zerg unit, morphed out of the Roach. Its effectiveness heavily relies ' +
    'on player micro due to its corrosive bile ability. This ability can destroy Force Fields and ' +
    'can be used for harassment, e.g. if the spell is cast on workers (mineral line).',
    new SC2Cost(25, 75, 9, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '16', '14.04', '1.14', '6')],
        new SC2Defence('120', '0', '1'),
        null,
        new SC2Speed('3.85'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_V),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/ravager.png', 'assets/units/zerg/image/ravager.png')
);