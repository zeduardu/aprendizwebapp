import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ContactRoutes } from './contact.routing';
import { ContactComponent } from './page/contact.component';




@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutes,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class ContactModule { }
