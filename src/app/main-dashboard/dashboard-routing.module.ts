import { Routes } from '@angular/router';
import { MainDashboard } from './main-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: MainDashboard,
    children: [
      {
       path: 'masters',
      loadChildren: () =>
        import('../masters/masters-module').then(m => m.MastersModule)
    }
,
    //   {
    //     path: 'transactions',
    //     loadChildren: () =>
    //       import('./transactions/transactions.module').then(m => m.TransactionsModule)
    //   },
    //   {
    //     path: 'reports',
    //     loadChildren: () =>
    //       import('./reports/reports.module').then(m => m.ReportsModule)
    //   },
    //   {
    //     path: 'utilities',
    //     loadChildren: () =>
    //       import('./utilities/utilities.module').then(m => m.UtilitiesModule)
    //   },
    //   {
    //     path: 'settings',
    //     loadChildren: () =>
    //       import('./settings/settings.module').then(m => m.SettingsModule)
    //   },
      {
        path: '',
        redirectTo: 'masters',
        pathMatch: 'full'
      }
    ]
  }
];