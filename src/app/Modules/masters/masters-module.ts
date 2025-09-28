import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './masters-routing.module';

@NgModule({
  declarations: [
    // Declare your masters components here like ItemMaster, etc.
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MastersModule {}
