import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { CartComponent } from 'src/app/components/user/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      { path: 'user-home', component: UserHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cart', component: CartComponent }
    ]
  },
  { path: 'signIn', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
