import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { PersonType } from './person-type';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  availableStaff: PersonType[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    let skillTypes = this.staffService.getSkills();
    this.availableStaff = [];

    for(let n = 0; n < skillTypes.length; n++) { 
      let skill = skillTypes[n];
      let count = Math.floor(Math.random() * 5) + 1;

      for(let v = 0; v < count; v++) { 
        this.availableStaff.push(this.staffService.requestType(skill));
      }

    }
  }

  randomImage() { 
    let random = Math.floor(Math.random() * 50) + 1;
    let gender = Math.random() >= 0.5 ? 'men' : 'women';
    return 'https://randomuser.me/api/portraits/' + gender + '/' + random + '.jpg';
  }



}
