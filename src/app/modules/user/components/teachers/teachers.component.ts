import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: any =
    [
      {  'Name': 'Kunika Kaushik', 'faculty': 'Science Teacher', url: "../../../../../assets/finalimages/kunika-mam.png"},
      {  'Name': 'Zainab Ansari', 'faculty': 'English Teacher', url: "../../../../../assets/finalimages/zenab-mam.jpg" },
      {  'Name': 'Rupinder Singh', 'faculty': 'Math Teacher', url: "../../../../../assets/finalimages/math-teacher.jpg" },
     
     
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
