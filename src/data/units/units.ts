import {
    ATTR_ARMORED,
    ATTR_BIOLOGICAL,
    ATTR_DETECTOR,
    ATTR_LIGHT,
    ATTR_MASSIVE,
    ATTR_MECHANICAL,
    ATTR_PSIONIC,
    GATEWAY,
    HATCHERY,
    KEY_A,
    KEY_B,
    KEY_C,
    KEY_D,
    KEY_E,
    KEY_H,
    KEY_I,
    KEY_M,
    KEY_Q,
    KEY_R,
    KEY_S,
    KEY_T,
    KEY_U,
    KEY_V,
    KEY_X,
    KEY_Z,
    NEXUS,
    ROBOTICS,
    STARGATE,
} from '../../model/const';
import { SC2Source, SourceType } from '../../model/sc2source';
import {
    SC2Attack,
    SC2Cargo,
    SC2CargoType,
    SC2Defence,
    SC2Energy,
    SC2OtherInfo,
    SC2Sight,
    SC2Speed,
    SC2Target,
    SC2UnitInformation,
} from '../../model/sc2unitinformation';
import { SC2Asset } from '../../model/sc2asset';
import { SC2Cost } from '../../model/sc2cost';
import { SC2Unit } from "../../model/sc2unit";
import { PROTOSS_RACE, SC2_RACES, TERRAN_RACE, ZERG_RACE } from '../races/races';
import { SC2UnitLink } from "../../model/sc2unitlink";
import { PROTOSS_PROBE } from "./protoss/probe";
import { PROTOSS_ZEALOT } from "./protoss/zealot";
import { PROTOSS_STALKER } from "./protoss/stalker";
import { PROTOSS_SENTRY } from "./protoss/sentry";
import { PROTOSS_ADEPT } from "./protoss/adept";
import { PROTOSS_HIGH_TEMPLAR } from "./protoss/high-templar";
import { PROTOSS_DARK_TEMPLAR } from "./protoss/dark-templar";
import { PROTOSS_IMMORTAL } from "./protoss/immortal";
import { PROTOSS_COLOSSUS } from "./protoss/colossus";
import { PROTOSS_DISRUPTOR } from "./protoss/disruptor";
import { PROTOSS_ARCHON } from "./protoss/archon";
import { PROTOSS_OBSERVER } from "./protoss/observer";
import { PROTOSS_WARP_PRISM } from "./protoss/warp-prism";
import { PROTOSS_PHOENIX } from "./protoss/phoenix";
import { PROTOSS_VOID_RAY } from "./protoss/void-ray";
import { PROTOSS_ORACLE } from "./protoss/oracle";
import { PROTOSS_CARRIER } from "./protoss/carrier";
import { PROTOSS_TEMPEST } from "./protoss/tempest";
import { PROTOSS_MOTHERSHIP_CORE } from "./protoss/mothership-core";
import { PROTOSS_MOTHERSHIP } from "./protoss/mothership";
import { ZERG_LARVA } from "./zerg/larva";
import { ZERG_DRONE } from "./zerg/drone";
import { ZERG_QUEEN } from "./zerg/queen";
import { ZERG_ZERGLING } from "./zerg/zergling";
import { ZERG_BANELING } from "./zerg/baneling";
import { ZERG_ROACH } from "./zerg/roach";
import { ZERG_RAVAGER } from "./zerg/ravager";
import { ZERG_HYDRALISK } from "./zerg/hydralisk";
import { ZERG_LURKER } from "./zerg/lurker";
import { ZERG_INFESTOR } from "./zerg/infestor";
import { ZERG_SWARM_HOST } from "./zerg/swarm-host";
import { ZERG_ULTRALISK } from "./zerg/ultralisk";
import { ZERG_LOCUST } from "./zerg/locust";
import { ZERG_BROODLING } from "./zerg/broodling";
import { ZERG_CHANGELING } from "./zerg/changeling";
import { ZERG_NYDUS_WORM } from "./zerg/nydus-worm";
import { ZERG_OVERLORD } from "./zerg/overlord";
import { ZERG_OVERSEER } from "./zerg/overseer";
import { ZERG_MUTALISK } from "./zerg/mutalisk";
import { ZERG_CORRUPTOR } from "./zerg/corruptor";
import { ZERG_BROODLORD } from "./zerg/broodlord";
import { ZERG_VIPER } from "./zerg/viper";


// new SC2Unit(
//     'e82d6ea5-7904-4a49-b52b-2825191c4f88', 
//     'Infested Terran',
//     ZERG_RACE,
//     '',
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/zerg/thumbnail/scv.png', 'assets/units/zerg/image/')
// ),

export const TERRAN_SCV = new SC2Unit(
    '1342531e-45e0-4d18-b6bd-bad14609514d',
    'SCV',
    TERRAN_RACE,
    'The SCV (Space Construction Vehicle) is the Terran worker unit. It harvests resources, ' +
    'constructs buildings and can repair all Terran mechanical units and buildings. As a ' +
    'building is constructed, the SCV must remain at the site until complete. If the building SCV ' +
    'is killed, the building\'s construction will halt. Building SCVs can be given queued assignments ' +
    'such as mining minerals and even constructing more buildings. If an SCV builds a Refinery it will ' +
    'automatically start mining gas unless it has been given another command in the queue.',
    new SC2Cost(50, 0, 12, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [],
        [new SC2Attack([SC2Target.GROUND], '5', '4.67', '1.07', '0.1')],
        new SC2Defence('45', '0', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('8'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/scv.png', 'assets/units/terran/image/scv.jpg')
);

// new SC2Unit(
//     '6f674e6e-b904-4c18-9acf-3a6b0c79a999', 
//     'Mule',
//     TERRAN_RACE,
//     '', 
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/terran/thumbnail/scv.png', 'assets/units/terran/image/mule.jpg')
// ),

export const TERRAN_MARINE = new SC2Unit(
    'c1871f19-cd83-4f3c-a8fd-ca663d384cee',
    'Marine',
    TERRAN_RACE,
    'Marines are the all-purpose infantry unit produced from a Barracks with a Reactor. Having the ' +
    'quickest and cheapest production of all Terran units make the Mineral backbone that scales very ' +
    'well with Stimpack Engineering Bay upgrades and Medivacs from the Starport. Before Stimpack, ' +
    'Marines are less than effective against Zerglings and Zealots; at least one Bunker and Supply ' +
    'Depots to wall-off is recommended for the early game.',
    new SC2Cost(50, 0, 18, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [],
        [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '6', '9.8', '0.61', '5')],
        new SC2Defence('45', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/marine.png', 'assets/units/terran/image/marine.jpg')
);

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

export const TERRAN_REAPER = new SC2Unit(
    '30e8b536-20f4-45b8-b04c-9c0c08aca19e',
    'Reaper',
    TERRAN_RACE,
    'The Reaper is a Lightly Armored scouting units with excellent freedom of movement, with an ' +
    'out-of-combat Health-regeneration ability. This unit can now be produced from a Barracks and ' +
    'from a Reactor. It still remains a costly & fragile unit; avoiding enemy fire and use of Bunkers ' +
    'or escaping Melee via Cliff edges for protection is advised.',
    new SC2Cost(50, 50, 32, 1),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL],
        [new SC2Attack([SC2Target.GROUND], '4(+1)(x2)', '10.1', '0.79', '5')],
        new SC2Defence('60', '0', '0(+1)'),
        null,
        new SC2Speed('5.25'),
        new SC2Sight('9'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '1')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/reaper.png', 'assets/units/terran/image/reaper.jpg')
);

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

export const TERRAN_HELLION = new SC2Unit(
    '4100a23b-9d42-42b1-9958-06c022e85cc4',
    'Hellion',
    TERRAN_RACE,
    'A fast expansion-raiding unit and anti-Melee unit when transformed into Hellbats. With a line ' +
    'of effect attack, the same range as a Marine\'s attack, Hellions excel at fighting in Choke ' +
    'Points on maps. With a very slow cooldown on attack and fast movement speed, this unit requires ' +
    'a lot of attention and micro-management to be effective.',
    new SC2Cost(100, 0, 21, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '8', '4.48', '1.79', '5')],
        new SC2Defence('90', '0', '0'),
        null,
        new SC2Speed('5.95'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/hellion.png', 'assets/units/terran/image/hellion.jpg')
);

export const TERRAN_HELLBAT = new SC2Unit(
    'a7b67a8f-02e8-4df2-9e18-8c14b1320e79',
    'Hellbat',
    TERRAN_RACE,
    'A tough melee-range unit with conical splash damage, after finishing an Armory Hellbats can be produced ' +
    'from the Factory or transformed from and into the Hellion (Transformation takes 2 seconds). The Hellbat is ' +
    'both a Biological unit and a Mechanical unit and can be healed by both Medivacs and SCVs. The Hellbat has ' +
    '45 more health points than the Hellion and a short-ranged conical splash damage. Ideal for tanking and ' +
    'dealing damage to Melee units.',
    new SC2Cost(100, 0, 21, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_LIGHT, ATTR_BIOLOGICAL, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '18', '12.6', '1.43', '2')],
        new SC2Defence('135', '0', '0'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/hellbat.png', 'assets/units/terran/image/hellbat.jpg')
);

export const TERRAN_SIEGE_TANK = new SC2Unit(
    'f20e2af3-97fd-4a9b-987a-e126647d60e0',
    'Siege Tank',
    TERRAN_RACE,
    'The long-ranged Siege Tank is a Mechanical unit built from a Factory with an attached Tech Lab ' +
    'and high damage versus Armored like Roaches and Stalkers. Against smaller units, the Siege Tank ' +
    'can switch to the stationary Siege Mode to deal splash damage from longer range.',
    new SC2Cost(150, 125, 32, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [
            new SC2Attack([SC2Target.GROUND], '15', '20.27', '0.74', '7'),
            new SC2Attack([SC2Target.GROUND], '40', '18.69', '2.14', '13')
        ],
        new SC2Defence('175', '0', '1'),
        null,
        new SC2Speed('3.15'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '0')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/siege-tank.png', 'assets/units/terran/image/siege-tank.jpg')
);

export const TERRAN_CYCLONE = new SC2Unit(
    '0c8e5b4d-7244-4dee-a3ea-8ad5bcace622',
    'Cyclone',
    TERRAN_RACE,
    'The Cyclone is a fast hit-and-away vehicle produced from the Factory. Has a high spell damage ability ' +
    '(Ignores Armor completely) called Lock-On that is ideal against aerial, high health and/or slower ' +
    'moving targets. In the early game this unit is often seen defending alongside Missile Turrets and Marines, ' +
    'and later on raiding undefended opposing mining workers and bases with Hellions.',
    new SC2Cost(150, 100, 32, 3),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [new SC2Attack([SC2Target.GROUND], '3', '30', '0.1', '6')],
        new SC2Defence('180', '0', '1'),
        null,
        new SC2Speed('4.13'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '4')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/cyclone.png', 'assets/units/terran/image/cyclone.png')
);

export const TERRAN_WIDOW_MINE = new SC2Unit(
    '2005de9b-f2b4-40d1-a8f2-5ee4dd9e7cd1',
    'Widow Mine',
    TERRAN_RACE,
    'A Light Mechanical mine produced from the Factory with a Reactor. Must Burrow into the ground before it ' +
    'can use the "Activate Mine" ability to cause Splash damage ground or air units. Deals fixed Spell damage ' +
    '(ignores Armor upgrades) to both the primary target and splash, takes 29 seconds to load the next attack, ' +
    'and can only fire while Burrowed underground. Has a slight attack delay before casting "Activate Mine," and ' +
    'is vulnerable to fast units like Mutalisk and Adepts - if they have enough units to one-shot a Mine, ' +
    'they will be unharmed.',
    new SC2Cost(75, 25, 29, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_LIGHT, ATTR_MECHANICAL],
        [],
        // [new SC2Attack([SC2Target.GROUND, SC2Target.AIR], '125', '0', '0', '0')],
        new SC2Defence('90', '0', '0'),
        null,
        new SC2Speed('3.94'),
        new SC2Sight('7'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/widow-mine.png', 'assets/units/terran/image/widow-mine.jpg')
);

export const TERRAN_THOR = new SC2Unit(
    '09b552dc-575d-46a3-92ff-0d6ad7801c65',
    'Thor',
    TERRAN_RACE,
    'The Thor is a Massive Terran walking Gun-Battery with strong single target ground attack and a ' +
    'long range missile pod with small area of effect damage. After finishing an Armory, Thors can be ' +
    'built from a Factory with a Tech Lab and have no ability upgrades. The Thor is like the Ultralisk ' +
    'has a moderate damage output for cost, but most of these two units strength comes from a large health ' +
    'pool that can be repaired with SCVs and Queens; while blocking for weaker higher damage units ' +
    'like Liberators and Siege Tanks.',
    new SC2Cost(300, 200, 0, 0),
    new SC2UnitInformation(
        [SC2Target.GROUND],
        [],
        [new SC2Attack([SC2Target.GROUND], '0', '0', '0', '0')],
        new SC2Defence('0', '0', '0'),
        new SC2Energy('0', '0'),
        new SC2Speed('0'),
        new SC2Sight('0'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '8')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/thor.png', 'assets/units/terran/image/thor.jpg')
);

export const TERRAN_VIKING = new SC2Unit(
    'e0912697-ba64-4fe6-8122-5014431638e2',
    'Viking',
    TERRAN_RACE,
    'The Viking is an anti-air fighter with the ability to transform into an assault walker ' +
    '(the transformation taking four in-game seconds). The Viking is best utilized when supported ' +
    'by units which can protect the vikings from anti-air attacks from the ground. They are best suited ' +
    'for taking down strong, hard-hitting air units such as Void Rays, Corruptors, Tempests, but do not fare ' +
    'as well against lighter and faster units such as the Mutalisk or Phoenix. Vikings are produced from a Starport ' +
    '(with or without a reactor) and are generally produced in a set number as opposed to continuous production, in ' +
    'order to cost-effectively eliminate enemy air units without overspending resources which could be spent elsewhere.',
    new SC2Cost(150, 75, 30, 2),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [
            new SC2Attack([SC2Target.GROUND], '12', '16.8', '0.71', '6'),
            new SC2Attack([SC2Target.AIR], '10', '14', '1.43', '9')
        ],
        new SC2Defence('125', '0', '0'),
        new SC2Energy('0', '0'),
        new SC2Speed('3.15 (ground), 3.85 (air)'),
        new SC2Sight('10'),
        new SC2Cargo(SC2CargoType.IS_INCLUDED_IN_OTHER_UNITS, '2')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/viking.png', 'assets/units/terran/image/viking.jpg')
);

export const TERRAN_MEDIVAC = new SC2Unit(
    '9389a6f9-c9f8-4219-a2bc-9ff5efc6be6c',
    'Medivac',
    TERRAN_RACE,
    'A dual purpose Dropship and Healer (12.6 Health per second) and can be produced right away ' +
    'from the Starport with the Ignite Afterburners ability ready right away. Ignite Afterburners ' +
    'increases the Medivacs movement speed to 5.94 (faster than a Mutalisk and equal to a Phoenix) ' +
    'for a quick escape or running past anti-air units and defence.',
    new SC2Cost(100, 100, 30, 2),
    new SC2UnitInformation(
        [],
        [ATTR_ARMORED, ATTR_MECHANICAL],
        [],
        new SC2Defence('150', '0', '1'),
        new SC2Energy('50', '200'),
        new SC2Speed('3.5'),
        new SC2Sight('11'),
        new SC2Cargo(SC2CargoType.INCLUDE_OTHER_UNITS, '8')
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/medivac.png', 'assets/units/terran/image/medivac.jpg')
);

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

export const TERRAN_BATTLE_CRUISER = new SC2Unit(
    'ce481091-38c3-4633-8e9a-b2205f34d104',
    'Battlecruiser',
    TERRAN_RACE,
    'he Battlecruiser is the Terran\'s capital ship. In LotV the Battlecruiser has been granted the ' +
    'Tactical Jump ability, allowing it to teleport anywhere on the map (regardless of fog of war).It can ' +
    'be constructed at a Starport with a Tech Lab add-on once a Fusion Core has been built. It can ' +
    'deal large amounts of damage and has high health. ',
    new SC2Cost(400, 300, 64, 6),
    new SC2UnitInformation(
        [SC2Target.GROUND, SC2Target.AIR],
        [ATTR_ARMORED, ATTR_MECHANICAL, ATTR_MASSIVE],
        [
            new SC2Attack([SC2Target.GROUND], '8', '50', '0.16', '6'),
            new SC2Attack([SC2Target.AIR], '6', '37.5', '0.16', '6')
        ],
        new SC2Defence('550', '0', '3'),
        null,
        new SC2Speed('2.62'),
        new SC2Sight('12'),
        null
    ),
    null,
    null,
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    [new SC2UnitLink(''), new SC2UnitLink(''), new SC2UnitLink('')],
    new SC2Asset('assets/units/terran/thumbnail/battlecruiser.png', 'assets/units/terran/image/battlecruiser.jpg')
);

// new SC2Unit(
//     '9bc1417d-8649-4c0f-bca7-0a5985b86a72',
//     'Auto-Turret',
//     TERRAN_RACE,
//     '', 
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/terran/thumbnail/auto-turret.png', null)
// ),
// new SC2Unit(
//     '32fc8e1f-fa2a-4fc7-85dc-0e55d97df97d',
//     'Point Defense Drone',
//     TERRAN_RACE,
//     '', 
//     new SC2Cost(0, 0, 0, 0),
//     null,
//     null,
//     new SC2Asset('assets/units/terran/thumbnail/scv.png', null)
// )

export const SC2_UNITS = [
    PROTOSS_PROBE,
    PROTOSS_ZEALOT,
    PROTOSS_STALKER,
    PROTOSS_SENTRY,
    PROTOSS_ADEPT,
    PROTOSS_HIGH_TEMPLAR,
    PROTOSS_DARK_TEMPLAR,
    PROTOSS_IMMORTAL,
    PROTOSS_COLOSSUS,
    PROTOSS_DISRUPTOR,
    PROTOSS_ARCHON,
    PROTOSS_OBSERVER,
    PROTOSS_WARP_PRISM,
    PROTOSS_PHOENIX,
    PROTOSS_VOID_RAY,
    PROTOSS_ORACLE,
    PROTOSS_CARRIER,
    PROTOSS_TEMPEST,
    PROTOSS_MOTHERSHIP_CORE,
    PROTOSS_MOTHERSHIP,
    ZERG_LARVA,
    ZERG_DRONE,
    ZERG_QUEEN,
    ZERG_ZERGLING,
    ZERG_BANELING,
    ZERG_ROACH,
    ZERG_RAVAGER,
    ZERG_HYDRALISK,
    ZERG_LURKER,
    ZERG_INFESTOR,
    ZERG_SWARM_HOST,
    ZERG_ULTRALISK,
    ZERG_LOCUST,
    ZERG_BROODLING,
    ZERG_CHANGELING,
    ZERG_NYDUS_WORM,
    ZERG_OVERLORD,
    ZERG_OVERSEER,
    ZERG_MUTALISK,
    ZERG_CORRUPTOR,
    ZERG_BROODLORD,
    ZERG_VIPER,
    TERRAN_SCV,
    TERRAN_MARINE,
    TERRAN_MARAUDER,
    TERRAN_REAPER,
    TERRAN_GHOST,
    TERRAN_HELLION,
    TERRAN_HELLBAT,
    TERRAN_SIEGE_TANK,
    TERRAN_CYCLONE,
    TERRAN_WIDOW_MINE,
    TERRAN_THOR,
    TERRAN_VIKING,
    TERRAN_MEDIVAC,
    TERRAN_LIBERATOR,
    TERRAN_RAVEN,
    TERRAN_BANSHEE,
    TERRAN_BATTLE_CRUISER
]