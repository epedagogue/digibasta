import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { CartComponent } from 'src/app/components/user/cart/cart.component';
import { CoursesDetailsComponent } from 'src/app/components/user/courses-details/courses-details.component';
import { CoursesComponent } from 'src/app/components/user/courses/courses.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserHomeComponent,
    children: [
      { path: '', component: CoursesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cart', component: CartComponent },
      { path: 'course-detail', component: CoursesDetailsComponent }
    ]
  },
  { path: 'signIn', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
