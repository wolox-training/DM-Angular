import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingUpComponent } from './screens/unauth/components/sing-up/sing-up.component';
import { LoginComponent } from './screens/unauth/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { HomeComponent } from './screens/auth/home/home.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SingUpComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'books',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./screens/auth/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
