import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'courses', 'des', 'price', 'stock', 'status', 'edit'];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {
  }

}
