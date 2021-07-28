import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component'
import { CoursesComponent } from './components/courses/courses.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DiscountComponent } from './components/discount/discount.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    CoursesComponent,
    CustomerComponent,
    DiscountComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
