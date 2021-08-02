import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: any =
    [
      {  'Name': 'Kunika Kaushik', 'faculty': 'Science Teacher', url: "../../../../../assets/kunika-mam-2.jpg"},
      {  'Name': 'Zainab Ansari', 'faculty': 'English Teacher', url: "../../../../../assets/zenab-mam-1.jpg" },
      {  'Name': 'Rupinder Singh', 'faculty': 'Math Teacher', url: "../../../../../assets/kunika-mam-2.jpg" },
     
     
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
