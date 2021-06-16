import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SharedModule } from './modules/shared-module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { UserSignComponent } from './components/user/user-sign/user-sign.component';
import { CoursesComponent } from './components/admin/courses/courses.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { DiscountComponent } from './components/admin/discount/discount.component';
import { OrderComponent } from './components/admin/order/order.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { CartComponent } from './components/user/cart/cart.component';
import { CoursesDetailsComponent } from './components/user/courses-details/courses-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    UserSignComponent,
    CoursesComponent,
    CustomerComponent,
    DiscountComponent,
    OrderComponent,
    ProfileComponent,
    CartComponent,
    CoursesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
