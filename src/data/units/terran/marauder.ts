import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
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
import { ATTR_ARMORED, ATTR_BIOLOGICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_MARAUDER = new SC2Unit(
    'f064ac69-e4c1-4d23-90dd-26002bba354f',
    'Marauder',
    TERRAN_RACE,
    'Produced from a Barracks with a Tech Lab, most of this unit\'s attention will be against other ' +
    'armored units such as the Roach or the Stalker. Being almost the opposite of a Marine this unit ' +
    'is meaty and slow firing, and will take some attention during battles to make this unit target Armored ' +
    'units to do full damage. Supplementing this is the Marauder\'s long range and heavy damage every individual ' +
    'shot. Their health and armor make them somewhat better of a meatshield than Marines as well.',
    new SC2Cost(100, 25, 21, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '5', '9.3', '1.07', '6')],
        new SC2Defence('125', '0', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/marauder.png', 'assets/units/terran/image/marauder.jpg')
);