import { ZERG_VIPER_ID } from '../const';
import { SC2Unit } from '../../../model/sc2unit';
import { ZERG_RACE } from '../../races/races';
import { SC2Cost } from '../../../model/sc2cost';
import { SC2Defence, SC2Energy, SC2Sight, SC2Speed, SC2UnitInformation } from '../../../model/sc2unitinformation';
import { ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_PSIONIC } from '../../../model/const';
import { SC2UnitLink } from '../../../model/sc2unitlink';
import { SC2Asset } from '../../../model/sc2asset';


export const ZERG_VIPER = new SC2Unit(
    ZERG_VIPER_ID,
    'Viper',
    ZERG_RACE,
    'The Viper is a Zerg flying support caster that requires a Hive. The Viper does not attack. ' +
    'Instead, it uses its spells to disrupt the positioning of enemy units. The Viper is ' +
    'particularly effective against entrenched positions and clustered armies. It can also ' +
    'separate high value targets such as Thors and Colossi from a group so they can be ' +
    'surrounded and killed more easily.',
    new SC2Cost(100, 200, 29, 3),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_BIOLOGICAL, ATTR_PSIONIC],
        null,
        new SC2Defence('150', '0', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('4.13'),
        new SC2Sight('11'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/viper.png', 'assets/units/zerg/image/viper.jpg')
);