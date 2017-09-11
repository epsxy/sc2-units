import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_MECHANICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_LIBERATOR = new SC2Unit(
    'c30399f0-57e9-4faa-8810-95724f949190',
    'Liberator',
    TERRAN_RACE,
    'The Liberator can switch between two Gunship roles called Defender Mode as a Stationary Siege ' +
    'unit, it\'s fast aerial Fighter Mode and is produced from a Starport. Both modes have a 2 second ' +
    'transformation time between them. In Fighter Mode, it fires two air-to-air missiles that deal 10 ' +
    'damage with a small area of effect. In the stationary Defender Mode firing on a targeted area deals ' +
    'high single-target damage against ground units but cannot fire at structures.',
    new SC2Cost(150, 150, 43, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [
            new SC2Attack([SC2Target.GROUND], '75', '65.8', '1.14', '10'),
            new SC2Attack([SC2Target.AIR], '5', '7.8', '1.29', '5')
        ],
        new SC2Defence('180', '0', '0'),
        null,
        new SC2Speed('4.72'),
        new SC2Sight('10 (Fighter), 13 (Defender)'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/liberator.png', 'assets/units/terran/image/liberator.png')
);