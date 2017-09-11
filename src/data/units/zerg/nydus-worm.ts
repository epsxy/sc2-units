import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_ARMORED } from "../../../model/const";


export const ZERG_NYDUS_WORM = new SC2Unit(
    '9acd24e5-f25f-4f1b-b174-d7a897c6c755',
    'Nydus Worm',
    ZERG_RACE,
    'The Nydus Worm is a Zerg structure used to move units quickly around the map. In ' +
    'LotV, the Nydus Worm was changed. Nydus Worms are invincible while emerging. ' +
    'The main effect of this change is that workers will no longer be a viable defense ' +
    'against nydus worms.',
    new SC2Cost(100, 100, 14, 0),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED],
        [],
        new SC2Defence('200', '0', '1'),
        null,
        null,
        new SC2Sight('10'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/nydus-worm.png', 'assets/units/zerg/image/nydus-worm.jpg')
);