import { ZERG_DRONE_ID } from '../const';
import { SC2Unit } from "../../../model/sc2unit";
import { ZERG_RACE } from "../../races/races";
import { SC2Cost } from "../../../model/sc2cost";
import { SC2UnitInformation, SC2Defence, SC2Speed, SC2Sight, SC2Target, SC2Attack, SC2CargoType, SC2Cargo } from "../../../model/sc2unitinformation";
import { SC2Source, SourceType } from "../../../model/sc2source";
import { SC2UnitLink } from "../../../model/sc2unitlink";
import { SC2Asset } from "../../../model/sc2asset";
import { ATTR_LIGHT, ATTR_BIOLOGICAL, HATCHERY, KEY_D } from "../../../model/const";


export const ZERG_DRONE = new SC2Unit(
    ZERG_DRONE_ID,
    'Drone',
    ZERG_RACE,
    'The Drone is the basic worker unit for Zerg. It can harvest Minerals and ' +
    'Vespene Gas as well as build any Zerg structure at the cost of its life. ' +
    'Drones differ from Probes and SCVs in that they can only slowly regenerate ' +
    'health as opposed to the fast recharging shields of the Probe or the repairable ' +
    '45 hit points of the SCV.',
    new SC2Cost(50, 0, 12, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '5', '4.67', '1.07', '0.1')],
        new SC2Defence('40', '0', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    new SC2Source(HATCHERY, SourceType.BUILDING, KEY_D),
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/zerg/thumbnail/drone.png', 'assets/units/zerg/image/drone.jpg')
);