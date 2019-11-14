import { Story } from "./Story";
export class Project {
    constructor(lead: Story) {
        this.lead = lead;
        this.stories = [];
    }
    lead: Story; // the sales lead that sparked this project
    stories: string[] = []; //storyid's of the subsequent stories created by the BA (start with 'r')
}
