import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AccountService } from './services/account/account.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { EnterOtpComponent } from './component/enter-otp/enter-otp.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    EnterOtpComponent,
    PageNotFoundComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
