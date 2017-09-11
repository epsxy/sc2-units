import { SC2Unit } from '../../../model/sc2unit';
import { ZERG_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Attack, SC2Defence, SC2Sight, SC2Speed, SC2Target, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_BIOLOGICAL, ATTR_LIGHT } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const ZERG_MUTALISK = new SC2Unit(
    '31719cf6-32b8-44a3-8669-6eacec963093',
    'Mutalisk',
    ZERG_RACE,
    'The Mutalisk is an extremely fast air attack unit capable of attacking both air and ' +
    'ground units. The Mutalisk\'s projectile, called "Glaive Wurm", hits the target and ' +
    'then two subsequent targets (each for a third of the damage of the previous hit). ' +
    'Mutalisks make effective scouts and skirmishers, able to slow/disrupt mining operations, ' +
    'incoming forces, or enemy expansions.',
    new SC2Cost(100, 100, 24, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '9', '8.26', '1.09', '3')],
        new SC2Defence('120', '0', '1'),
        null,
        new SC2Speed('5.6'),
        new SC2Sight('11'),
        null
    ),
    null,
    // new SC2Source(HATCHERY, KEY_T),
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/mutalisk.png', 'assets/units/zerg/image/mutalisk.jpg')
);