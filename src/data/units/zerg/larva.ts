import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_LIGHT, ATTR_BIOLOGICAL, HATCHERY, KEY_S } from "../../../model/const";
// TODO: Add special speed for zerg (on creep)


export const ZERG_LARVA = new SC2Unit(
    '71239ff5-a24e-4d17-b103-65660b190642',
    'Larva',
    ZERG_RACE,
    'The Larva is the base unit for Zerg. It can morph into a lot of units.' +
    'There can be a maximum of 19 Larva on one Hatchery. ' +
    'Additional Larvae produced at that Hatchery instantly die.',
    new SC2Cost(0, 0, 0, 0),
    new SC2UnitInformation(
        [],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [],
        new SC2Defence('25', '0', '10'),
        null,
        new SC2Speed('0.79'),
        new SC2Sight('5'),
        null
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_S),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/larva.png', 'assets/units/zerg/image/larva.jpg')
);