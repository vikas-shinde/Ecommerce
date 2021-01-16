import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';

import { LoginComponent } from '../component/login/login.component';
import { ForgotPasswordComponent } from '../component/forgot-password/forgot-password.component';
import { EnterOtpComponent } from '../component/enter-otp/enter-otp.component';
import { CreateAccountComponent } from '../component/create-account/create-account.component';

import { AccountService } from '../services/account.service';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    EnterOtpComponent,
    ForgotPasswordComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ],
  providers: [AccountService]
})
export class AccountModule { }
