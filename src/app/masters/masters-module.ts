import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './masters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)   // 👈 child routes for lazy loading
  ]
})
export class MastersModule {}
