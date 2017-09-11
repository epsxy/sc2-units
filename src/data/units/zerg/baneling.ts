import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2CargoType, SC2Cargo } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_BIOLOGICAL } from "../../../model/const";


export const ZERG_BANELING = new SC2Unit(
    'c40959e8-31ae-49bf-8a3a-eb6e127c58f6',
    'Baneling',
    ZERG_RACE,
    'The Baneling is a suicide bomber unit morphed from Zerglings after a Baneling Nest has been ' +
    'constructed. Similar to the Infested Terran from Brood War, the Baneling is a suicidal unit ' +
    'that deals significant splash damage.',
    new SC2Cost(25, 25, 14, 0.5),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_BIOLOGICAL],
        [
            new SC2Attack([SC2Target.GROUND], '20', '0', '0', '0.25 (melee), 2.20 (aoe)'),
            new SC2Attack([SC2Target.BUILDING], '80', '0', '0', '0.25 (melee), 2.20 (aoe)')
        ],
        new SC2Defence('30', '0', '0'),
        null,
        new SC2Speed('4.55'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/baneling.png', 'assets/units/zerg/image/baneling.jpg')
)