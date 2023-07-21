import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AdminComponent } from './layout/admin/admin.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./pages/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/admin/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/admin/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./pages/admin/movies/movies.module').then(
            (m) => m.MoviesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
