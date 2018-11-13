import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  jobsearch = new FormGroup({
    skillset: new FormControl(''),
    location: new FormControl(''),
    experience: new FormControl(''),
    salary: new FormControl(''),
  });
  experience = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  salary = ['< 3 lakhs ', '3 - 5 lakhs', '5 - 7 lakhs', '7 - 9 lakhs', '9 - 11 lakhs', '11 - 13 lakhs', '13 - 15 lakhs', '15 - 17 lakhs', '17 - 19 lakhs',
    '19 - 21 lakhs', '21 - 23 lakhs', '23 - 25 lakhs', ' > 25lakhs'];

  onSubmit() {
        
  }


}
