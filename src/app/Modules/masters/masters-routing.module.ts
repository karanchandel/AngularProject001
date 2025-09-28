import { Routes } from '@angular/router';
import { ItemMaster } from './item-master/item-master';
import { CategoryMaster } from './category-master/category-master';
import { CustomerMaster } from './customer-master/customer-master';
import { SupplierMaster } from './supplier-master/supplier-master';
import { UnitMaster } from './unit-master/unit-master';

export const routes: Routes = [
  { path: 'item-master', component: ItemMaster },
  { path: 'supplier-master', component: SupplierMaster },
  { path: 'customer-master', component: CustomerMaster },
  { path: 'category-master', component: CategoryMaster },
  { path: 'unit-master', component: UnitMaster },
  { path: '', redirectTo: 'item-master', pathMatch: 'full' }
];
