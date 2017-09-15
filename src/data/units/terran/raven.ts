import { ATTR_DETECTOR, ATTR_LIGHT, ATTR_MECHANICAL } from '../../../model/const';
import { SC2Asset } from '../../../model/sc2asset';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Unit } from '../../../model/sc2unit';
import { SC2Defence, SC2Energy, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { TERRAN_RACE } from '../../races/races';
import {
    PROTOSS_DARK_TEMPLAR_ID,
    PROTOSS_PHOENIX_ID,
    TERRAN_BANSHEE_ID,
    TERRAN_RAVEN_ID,
    ZERG_CORRUPTOR_ID,
    ZERG_ROACH_ID,
} from '../const';
import { TERRAN_GHOST } from './ghost';


export const TERRAN_RAVEN = new SC2Unit(
    TERRAN_RAVEN_ID,
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
    [new SC2UnitLink(PROTOSS_DARK_TEMPLAR_ID), new SC2UnitLink(ZERG_ROACH_ID), new SC2UnitLink(TERRAN_BANSHEE_ID)],
    [new SC2UnitLink(PROTOSS_PHOENIX_ID), new SC2UnitLink(ZERG_CORRUPTOR_ID), new SC2UnitLink(TERRAN_GHOST.id)],
    new SC2Asset('assets/units/terran/thumbnail/raven.png', 'assets/units/terran/image/raven.jpg')
);