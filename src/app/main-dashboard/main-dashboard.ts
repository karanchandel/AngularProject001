import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './main-dashboard.html',
  styleUrls: ['./main-dashboard.css']
})
export class MainDashboard {
  inventorySummary = [
    { title: 'Total Products', value: 250 },
    { title: 'Active Orders', value: 65 },
    { title: 'Suppliers', value: 12 },
    { title: 'Customers', value: 102 },
  ];

  products = [
    { id: 1, name: 'Product A', stock: 125, price: 150 },
    { id: 2, name: 'Product B', stock: 80, price: 200 },
    { id: 3, name: 'Product C', stock: 34, price: 300 },
  ];
}
