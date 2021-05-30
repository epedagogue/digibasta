import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CoursesComponent } from 'src/app/components/admin/courses/courses.component';
import { DiscountComponent } from 'src/app/components/admin/discount/discount.component';
import { CustomerComponent } from 'src/app/components/admin/customer/customer.component';
import { OrderComponent } from 'src/app/components/admin/order/order.component';

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
