import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2Energy, SC2CargoType, SC2Cargo } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_BIOLOGICAL, ATTR_PSIONIC, HATCHERY, KEY_Q } from "../../../model/const";


export const ZERG_QUEEN = new SC2Unit(
    '41a6dd8a-1913-47fb-9825-d13dff723ebb',
    'Queen',
    ZERG_RACE,
    'The Queen is an essential unit for the Zerg base, capable of being spawned ' +
    'from any Hatchery after a Spawning Pool has been built. The unit provides ' +
    'light defense against both ground and air threats.',
    new SC2Cost(150, 0, 36, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [
            new SC2Attack([SC2Target.GROUND], '4', '11.2', '0.71', '5'),
            new SC2Attack([SC2Target.AIR], '9', '12.6', '0.71', '8')
        ],
        new SC2Defence('175', '0', '1'),
        new SC2Energy('25', '200'),
        new SC2Speed('1.31'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_Q),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/queen.png', 'assets/units/zerg/image/queen.jpg')
);