import { ZERG_HYDRALISK_ID } from '../const';
import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2Cargo, SC2CargoType } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_BIOLOGICAL, ATTR_LIGHT, KEY_H, HATCHERY } from "../../../model/const";


export const ZERG_HYDRALISK = new SC2Unit(
    ZERG_HYDRALISK_ID,
    'Hydralisk',
    ZERG_RACE,
    'The Hydralisk is a ranged Lair-tech unit that can be after building a Hydralisk Den. The ' +
    'Hydralisk\'s fast attack and high damage make it effective at dealing consistent to ground ' +
    'and air unit in the game. Can morph into the Lurker after morphing the Hydralisk Den into a ' +
    'Lurker Den.',
    new SC2Cost(100, 50, 24, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '12', '22.4', '0.54', '5')],
        new SC2Defence('90', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_H),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/hydralisk.png', 'assets/units/zerg/image/hydralisk.jpg')
);