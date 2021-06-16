import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared-module';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { CoursesComponent } from '../../components/user/courses/courses.component'

@NgModule({
  declarations: [
    UserHomeComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
