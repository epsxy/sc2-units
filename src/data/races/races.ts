import { SC2Race, SC2RaceType } from '../../model/sc2races';

export const PROTOSS_RACE = new SC2Race(
    '4220bdfe-7f81-41f9-977e-3f61bc5c8d1b', 
    'Protoss', 
    SC2RaceType.PROTOSS, 
    'With their highly advanced technology and potent psionic abilities, the Protoss once ' +
    'considered themselves the most powerful species in the galaxy. The Protoss have never ' +
    'been a prolific people and have traditionally bolstered their numbers with a variety of ' +
    'robotic war machines. Individual Protoss warriors are unsurpassed in their skills, greatly ' +
    'enhanced by the combination of technology and formidable psionic strength.'
);
export const ZERG_RACE = new SC2Race(
    '97652a6b-c352-4b5a-82fd-1289cab6b021', 
    'Zerg', 
    SC2RaceType.ZERG, 
    'The Zerg are a race entirely unlike the Terrans or the Protoss. They are composed of many ' +
    'different species integrated into the Swarm via Zerg infestation. These creatures are rapidly ' +
    'and selectively evolved into deadly and efficient killers to further the driving Zerg imperative ' +
    'of achieving absolute domination. The Zerg make no use of technology to create their weapons, armor, ' +
    'or starships. Instead, these functions are efficiently fulfilled through biological adaptation and planned ' +
    'mutation of the Zerg strains. Even Zerg buildings are in fact specialized organs within the living, growing organism of a Zerg nest.');
export const TERRAN_RACE = new SC2Race(
    '92189723-31e5-471d-84de-76ea0095522d', 
    'Terran', 
    SC2RaceType.TERRAN, 
    'The Terrans are relative newcomers to the Koprulu sector. They are the descendents of a disastrous ' +
    'colonization expedition launched from Earth centuries ago. Its human cargo made up of dissidents and malcontents ' +
    'the ruling Earth government deemed expendable. The survivors of the expedition established three colonies ' +
    'that became the basis for the major power blocs in Terran space: the Confederacy, the Kel-Morian Combine, and ' +
    'the Umojan Protectorate. The corrupt Confederacy was overthrown by terrorist and revolutionary Arcturus Mengsk ' +
    'during the chaos of the Zerg invasion. Now the Terran Dominion has emerged from the ashes of the old Confederacy ' +
    'as the dominant power, ruled by none other than Emperor Arcturus I.'
);

export const SC2_RACES =  [
    PROTOSS_RACE,
    ZERG_RACE,
    TERRAN_RACE
]