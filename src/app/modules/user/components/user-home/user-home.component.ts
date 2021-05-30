import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  contents: string[] = ['Java', 'Angular', 'Python', 'Vue', 'React', 'c', 'C++'];
  constructor() { }

  ngOnInit(): void {
  }

}
