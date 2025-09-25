// src/app/masters/masters-routing.module.ts
import { Routes } from '@angular/router';
import { ItemMaster } from './item-master/item-master';

export const routes: Routes = [
  { path: 'item-master', component: ItemMaster },
  { path: '', redirectTo: 'item-master', pathMatch: 'full' }
];
