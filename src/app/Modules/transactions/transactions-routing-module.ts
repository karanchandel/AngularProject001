import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseEntry } from './purchase-entry/purchase-entry';
import { SalesEntry } from './sales-entry/sales-entry';
import { PurchaseReturn } from './purchase-return/purchase-return';
import { SalesReturn } from './sales-return/sales-return';
import { StockAdjustment } from './stock-adjustment/stock-adjustment';
import { TransferStock } from './transfer-stock/transfer-stock';


const routes: Routes = [
  { path: 'purchase-entry', component: PurchaseEntry },
  { path: 'sales-entry', component: SalesEntry },
  { path: 'purchase-return', component: PurchaseReturn },
  { path: 'sales-return', component: SalesReturn },
  { path: 'stock-adjustment', component: StockAdjustment },
  { path: 'transfer-stock', component: TransferStock },
  { path: '', redirectTo: 'purchase-entry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
