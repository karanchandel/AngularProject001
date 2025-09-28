import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing-module';
import { PurchaseEntry } from './purchase-entry/purchase-entry';
import { SalesEntry } from './sales-entry/sales-entry';
import { PurchaseReturn } from './purchase-return/purchase-return';
import { SalesReturn } from './sales-return/sales-return';
import { StockAdjustment } from './stock-adjustment/stock-adjustment';
import { TransferStock } from './transfer-stock/transfer-stock';


@NgModule({
  declarations: [
    PurchaseEntry,
    SalesEntry,
    PurchaseReturn,
    SalesReturn,
    StockAdjustment,
    TransferStock
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
