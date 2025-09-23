import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing-module';

import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,LoginComponent,
    SignupComponent,
    AuthRoutingModule
  ],
  exports: [
    
  ]
})
export class AuthModule {}
