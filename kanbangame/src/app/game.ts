import { Project } from './Project';
import { StoreItem } from './store/StoreItem';
import { Person } from './Person';
import { Story } from './Story';
import { PersonType } from './staff/person-type';

export class Game {
    

    Money: number;
    HighestMoney: number;
    Inflation: number;
    SmallInflation: number;
    MediumInflation: number;
    HyperInflation: number;
    Level: number;
    XP: number;
    LevelUpXP: number;
    PointPrice: number; // how many $'s paid for one point? (increases as game progresses.)
    ProjectSize: number; // how many points is a project generally worth (at the current level)
    LeadPrice: number;
    TotalXP: number;
    NextId: number; // TODO: private. used for determining primary key of staff members (inside the 'nextId' function)
    People: Map<string, Person>; //id's start with "p"
    Projects: Map<string, Project> // id's start with "r"
    Stories: Map<string, Story> // id's start with "r"
    AllLevelItems: Map<string, StoreItem[]> // all possible store items, grouped by the level where they become available
    AllPeopleTypes: Map<string, PersonType> // the people types
    StoreItems: Map<number, StoreItem> // the items that are currently available in the store.
    Items: Map<number, StoreItem> //all items that have been purchased and added to the game, start with "i"
    SelectedDoer: string; //id of selected person
    SelectedReceiver: string; //id of selected story
    DefaultSelfStartDelay: number;
    AnimalTendingDelay: number; // how long does it take to settle an animal down at your desk. (Can this involve the following emoji? 💩)
}
