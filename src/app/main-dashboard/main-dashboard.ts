import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './main-dashboard.html',
  styleUrls: ['./main-dashboard.css']
})
export class MainDashboard {
  sidebarOpen = signal(false);
  mastersOpen = signal(false);
  transactionsOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update(open => !open);
  }

  toggleMasters() {
    this.mastersOpen.update(open => !open);
  }

  toggleTransactions() {
    this.transactionsOpen.update(open => !open);
  }
}
