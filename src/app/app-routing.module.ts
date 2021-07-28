import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserService } from './_services/user.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/home' },
  {
    path: '',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "**",
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
