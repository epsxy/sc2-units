import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Energy,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_PSIONIC } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_GHOST = new SC2Unit(
    '7947077d-2f67-453f-acea-fe413b5873cd',
    'Ghost',
    TERRAN_RACE,
    'The Ghost is a specialized infantry unit built from a Barracks with an attached Tech Lab once a ' +
    'Ghost Academy has been constructed. The Ghost stands as an Anti-Spellcaster unit and high damage ' +
    'versus Light units.',
    new SC2Cost(200, 100, 29, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_BIOLOGICAL, ATTR_PSIONIC],
        [new SC2Attack([SC2Target.GROUND], '10', '9.3', '1.07', '6')],
        new SC2Defence('100', '0', '0'),
        new SC2Energy('75', '200'),
        new SC2Speed('3.94'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/ghost.png', 'assets/units/terran/image/ghost.jpg')
);