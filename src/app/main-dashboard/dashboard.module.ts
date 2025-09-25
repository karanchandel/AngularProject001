import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainDashboard} from './main-dashboard'; // Make sure filename matches
import { routes } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,MainDashboard,
    RouterModule.forChild(routes)
  ],
  declarations: [
    
  ]
})
export class DashboardModule {}