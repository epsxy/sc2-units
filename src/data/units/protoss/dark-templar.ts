import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_LIGHT, ATTR_PSIONIC, GATEWAY, KEY_D } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_DARK_TEMPLAR = new SC2Unit(
    'b12440c6-dfd8-4ee8-b6ec-4fa377153d4b',
    'Dark Templar',
    PROTOSS_RACE,
    'The Dark Templar (often abbreviated to DT) is a permanently cloaked ' +
    'Protoss assassin and a huge disruption to most standard builds for ' +
    'both sides. Dark Templar are warped-in at the Gateway after a Dark Shrine is built.',
    new SC2Cost(125, 125, 39, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND], '45', '37.2', '1.21', '0.1')],
        new SC2Defence('40', '80', '1'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    new SC2Source(GATEWAY, SourceType.BUILDING, KEY_D),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/dark-templar.png', 'assets/units/protoss/image/dark-templar.jpg')
);