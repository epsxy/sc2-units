import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2Energy, SC2CargoType, SC2Cargo } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_ARMORED, ATTR_PSIONIC, ATTR_BIOLOGICAL, HATCHERY, KEY_H } from "../../../model/const";


export const ZERG_INFESTOR = new SC2Unit(
    'afadd0eb-d5a4-4ae7-9dac-1accc3cd8799',
    'Infestor',
    ZERG_RACE,
    'The Infestor is an offensive spellcaster, meaning that its abilities are used to ' +
    'harm enemy units rather than support the player\'s units. It can be built after the ' +
    'Zerg player has an Infestation Pit. Infestors have three abilities: Neural Parasite, ' +
    'Fungal Growth, and Infested Terran. They can move while burrowed if Burrow is researched, ' +
    'but with a small collision radius.',
    new SC2Cost(100, 150, 36, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '12', '22.4', '0.54', '5')],
        new SC2Defence('90', '0', '0'),
        new SC2Energy('50', '200'),
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_H),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/infestor.png', 'assets/units/zerg/image/infestor.jpg')
);