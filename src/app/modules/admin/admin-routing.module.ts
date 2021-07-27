import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DiscountComponent } from './components/discount/discount.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'discount', component: DiscountComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'order', component: OrderComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
