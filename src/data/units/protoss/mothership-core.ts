import { SC2Unit } from '../../../model/sc2unit';
import { PROTOSS_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Attack,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MECHANICAL, ATTR_PSIONIC, KEY_M, NEXUS } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_MOTHERSHIP_CORE = new SC2Unit(
    'fcfbc539-5ba0-4a01-a4fe-ec579414ddb4',
    'Mothership Core',
    PROTOSS_RACE,
    'The Mothership Core is a flying support caster for the Protoss that can be built ' +
    'from the Nexus once the Cybernetics Core is finished. Its primary roles are base ' +
    'defence and army support. Like the Mothership, the Mothership Core is a unique unit ' +
    'that a player can only have one of at any time.',
    new SC2Cost(100, 100, 21, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND], '8', '13.1', '0.61', '5')],
        new SC2Defence('130', '60', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('9'),
        new SC2Sight('2.62'),
        null
    ),
    null,
    new SC2Source(NEXUS, SourceType.BUILDING, KEY_M),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/mothership-core.png', 'assets/units/protoss/image/mothership-core.jpg')
);