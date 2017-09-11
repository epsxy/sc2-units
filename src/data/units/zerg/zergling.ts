import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2Cargo, SC2CargoType } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_LIGHT, ATTR_BIOLOGICAL, HATCHERY, KEY_Z } from "../../../model/const";


export const ZERG_ZERGLING = new SC2Unit(
    'c1a2f2ca-a586-4c4f-b40e-3485c0de8c20',
    'Zergling',
    ZERG_RACE,
    'The Zergling is a small and fast melee attacker and the backbone of the Zerg ' +
    'army. Individual Zerglings are weak, but large groups can surround and terrorize ' +
    'enemy ground forces. In such groups, they soak a lot of incoming damage and provide ' +
    'a shield for more expensive units.',
    new SC2Cost(25, 0, 17, 0.5),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '5', '10', '0.497', '0.1')],
        new SC2Defence('35', '0', '0'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_Z),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/zergling.png', 'assets/units/zerg/image/zergling.jpg')
);