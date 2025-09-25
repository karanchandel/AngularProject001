import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main-dashboard.html',
  styleUrls: ['./main-dashboard.css']
})
export class MainDashboard {
  sidebarOpen = signal(false);
  toggleSidebar() {
    this.sidebarOpen.update(open => !open);
  }
}