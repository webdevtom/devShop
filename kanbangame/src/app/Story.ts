export interface Story {
    person: string;
    id: number;
    skillneeded: string;
    //column: string;
    status: string;
    busy: boolean;
    summary: string;
    points: number;
    logo: string; //logo from the project.
    icon: string; //icon from the person.
    hasBug: boolean;
    hasSpecBug: boolean;
    customerFoundBug: boolean;
    rework: boolean; // when a card is being reworked due to a found bug or spec bug, it is rework. (And is less time than the original work). 
    projectId: string; //contains 'r'
    pointPrice: number;
}
