import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { RegisterComponent } from './pages/register/register';
import { UsersListComponent } from './pages/users-list/users-list';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersListComponent },
  { path: '**', redirectTo: '' },
];
