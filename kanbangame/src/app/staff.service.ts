import { Injectable } from '@angular/core';
import { PersonType } from './staff/person-type';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  types: PersonType[];
  
  constructor() { 
    this.types = [
      { skill: "owner", price: 150, title: "owner" },
      { skill: "dev", price: 150, title: "Developer" },
      { skill: "test", price: 200, title: "Tester" },
      { skill: "test", price: 200, title: "QA Engineer" },
      { skill: "ba", price:250, title: "Product Analyst" },
      { skill: "pm", price:250, title: "Project Manager" }
    ];
  }

  requestType(skill: string) : PersonType { 
    return this.types.find(t => t.skill === skill);
  }

  getTypes() {
    return this.types;
  }

  getSkills() {
    return this.types.map(t => t.skill);
  }
}
