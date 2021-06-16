import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  contents: any =
    [
      { 'id': 1, 'courseName': 'Science', 'content': 'This is my favorite book' },
      { 'id': 1, 'courseName': 'Maths', 'content': 'This is my favorite book' },
      { 'id': 1, 'courseName': 'English', 'content': 'This is my favorite book' },
      { 'id': 1, 'courseName': 'EVS', 'content': 'This is my favorite book' },
      { 'id': 1, 'courseName': 'Social Seience', 'content': 'This is my favorite book' },
      { 'id': 1, 'courseName': 'Hindi', 'content': 'This is my favorite book' }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
