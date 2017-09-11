import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_MASSIVE } from "../../../model/const";


export const ZERG_BROODLORD = new SC2Unit(
    '0c28d5dc-8e40-404c-9845-0bd9c5aebe49',
    'Brood Lord',
    ZERG_RACE,
    'The Brood Lord is a flying heavy-assault Zerg air-to-ground unit that spawns Broodlings ' +
    'when it attacks. The Brood Lord can be morphed from a Corruptor once the Zerg player ' +
    'has made a Greater Spire.',
    new SC2Cost(150, 150, 24, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_MASSIVE],
        [new SC2Attack([SC2Target.GROUND], '20', '11.2', '1.79', '10')],
        new SC2Defence('225', '0', '1'),
        null,
        new SC2Speed('1.97'),
        new SC2Sight('12'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/brood-lord.png', 'assets/units/zerg/image/brood-lord.jpg')
);