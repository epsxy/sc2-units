import { PROTOSS_ORACLE_ID } from '../const';
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
import { ATTR_LIGHT, ATTR_MECHANICAL, ATTR_PSIONIC, KEY_E, STARGATE } from '../../../model/const';
import { SC2Source, SourceType } from '../../../model/sc2source';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const PROTOSS_ORACLE = new SC2Unit(
    PROTOSS_ORACLE_ID,
    'Oracle',
    PROTOSS_RACE,
    'The Oracle is a flying harassment and support caster for the Protoss that is produced ' +
    'from the Stargate. While fairly expensive and fragile, the Oracle is a very ' +
    'mobile unit and has several useful spells.',
    new SC2Cost(150, 150, 36, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND], '15', '24.4', '0.61', '4')],
        new SC2Defence('100', '60', '0'),
        new SC2Energy('50', '200'),
        new SC2Speed('5.6'),
        new SC2Sight('10'),
        null
    ),
    null,
    new SC2Source(STARGATE, SourceType.BUILDING, KEY_E),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/protoss/thumbnail/oracle.png', 'assets/units/protoss/image/oracle.jpg')
);