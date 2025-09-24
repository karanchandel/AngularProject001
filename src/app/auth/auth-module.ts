
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing-module';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
//import { RouterModule } from '@angular/router'; // <-- Import this

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    LoginComponent,      
    SignupComponent    
  ],
   declarations: []  
})
export class AuthModule {}
