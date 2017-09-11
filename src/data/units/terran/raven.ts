import { SC2Unit } from '../../../model/sc2unit';
import { TERRAN_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Defence, SC2Energy, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_DETECTOR, ATTR_LIGHT, ATTR_MECHANICAL } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const TERRAN_RAVEN = new SC2Unit(
    '15b477ac-a5bb-4dc3-b62d-0eefe69d9b09',
    'Raven',
    TERRAN_RACE,
    'The Raven is a flying support craft with detection. It provides both defensive and offensive capabilities ' +
    'through the use of its abilities. Ravens are a useful addition to a mid or late-game Terran army. With ' +
    'detection, a Terran player is able to see both cloaked and burrowed units within the Raven\'s sight range. ' +
    'Groups of Auto-Turrets can occasionally be used to block units and deal moderate damage. Point Defense Drones ' +
    'provide protection against enemy projectiles; greatly reducing damage taken by the player\'s units as long as ' +
    'the projectiles come in range of the drone, and finally the Seeker Missile is a spell that deals large splash ' +
    'damage and can devastate large armies if used correctly.',
    new SC2Cost(100, 200, 43, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL, ATTR_DETECTOR],
        [],
        new SC2Defence('140', '0', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('3.85'),
        new SC2Sight('11'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/raven.png', 'assets/units/terran/image/raven.jpg')
);