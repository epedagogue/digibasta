import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: any =
    [
      {  'courseName': 'Science', 'price': '2000'  },
      {  'courseName': 'Maths', 'price': '2000' },
      {  'courseName': 'English', 'price': '2000' },
      {  'courseName': 'EVS', 'price': '2000' },
      {  'courseName': 'Social Seience', 'price': '2000'  },
      {  'courseName': 'Hindi', 'price': '2000' },
      {  'courseName': 'newLangaugae', 'price': '3000' },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
