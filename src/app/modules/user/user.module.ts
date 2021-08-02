import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CartComponent } from './components/cart/cart.component';
import { UserSignComponent } from './components/user-sign/user-sign.component'
import { ProfileComponent } from './components/profile/profile.component'
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component'
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserHomeComponent,
    CoursesComponent,
    UserSignComponent,
    ProfileComponent,
    CartComponent,
    CoursesDetailsComponent,
    VideoPreviewComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    AboutusComponent,
    ContactusComponent,
    TeachersComponent,
    TeacherDetailsComponent,
    HomeComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CarouselModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
