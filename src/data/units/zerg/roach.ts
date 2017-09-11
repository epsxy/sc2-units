import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2CargoType, SC2Cargo } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_ARMORED, ATTR_BIOLOGICAL, HATCHERY, KEY_R } from "../../../model/const";


export const ZERG_ROACH = new SC2Unit(
    'd41fae3e-c6a7-4d84-81ed-0da67b9de9a5',
    'Roach',
    ZERG_RACE,
    'The Roach is an Armored-ground unit that can be produced after a Roach Warren has been built. ' +
    'With the Tunneling Claws upgrade, the Roach becomes one of two units (the other being the Infestor) ' +
    'that is able to move while burrowed. This is also indicated by the appearance of crystals on ' +
    'the backs of the Roaches.',
    new SC2Cost(75, 25, 19, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '16', '11.2', '1.43', '4')],
        new SC2Defence('145', '0', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_R),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/roach.png', 'assets/units/zerg/image/roach.jpg')
);