import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component'
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component'
import { UserSignComponent } from './components/user-sign/user-sign.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { HomeComponent } from './components/home/home.component';
import {MyLearningComponent} from './components/my-learning/my-learning.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserHomeComponent,
    children: [
      {path: 'course', component: CoursesComponent },
      {path: 'profile', component: ProfileComponent },
      // {path: 'cart', component: CartComponent },
      {path: 'course-detail', component: CoursesDetailsComponent },
      {path: 'signup', component: UserSignComponent},
      {path: 'login', component: UserLoginComponent},
      {path: 'header', component: HeaderComponent},
      // {path: 'checkout', component: CheckoutComponent},
      {path: 'about-us', component:AboutusComponent},
      {path: 'contact-us', component:ContactusComponent},
      {path: 'teachers', component: TeachersComponent},
      {path: 'teacher-details', component:TeacherDetailsComponent},
      {path: 'home', component:HomeComponent},
      {path: 'learning', component:MyLearningComponent}
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
