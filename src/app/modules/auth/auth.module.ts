import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [CommonModule, AuthRoutes],
  declarations: [LoginComponent],
})
export class AuthModule {}
