import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_LIGHT, ATTR_MECHANICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_BANSHEE = new SC2Unit(
    '0c928cb3-86db-4d48-b32d-6ab8d90317b0',
    'Banshee',
    TERRAN_RACE,
    'The Banshee is a strong Air-to-Ground unit that is built from a Starport with a Tech Lab add-on. ' +
    'The Banshee has a number of common uses. Used early on in any match-up, they can catch an opponent ' +
    'off guard and allow for uninterrupted harassment, especially if Cloak has been researched. For this ' +
    'reason, hiding two Starports can be devastating for an opponent if left unscouted. When supported by ' +
    'Vikings, Banshees can be used to form a very powerful air army that can be very hard for Protoss to deal with.',
    new SC2Cost(150, 100, 43, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '12', '27', '0.89', '6')],
        new SC2Defence('140', '0', '0'),
        null,
        new SC2Speed('3.85'),
        new SC2Sight('10'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/banshee.png', 'assets/units/terran/image/banshee.jpg')
);