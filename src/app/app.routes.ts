import { Routes } from '@angular/router';
import { MainDashboard} from '../app/main-dashboard/main-dashboard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule),  
  },
  {
    path: 'dashboard',      
    component: MainDashboard
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
  { path: 'dashboard', component: MainDashboard }

];
