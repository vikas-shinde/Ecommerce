import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterOtpComponent } from '../component/enter-otp/enter-otp.component';
import { ForgotPasswordComponent } from '../component/forgot-password/forgot-password.component';
import { LoginComponent } from '../component/login/login.component';


const routes: Routes = [ 
{path: 'login', component: LoginComponent},
{path: 'forgotpassword', component: ForgotPasswordComponent},
{path: 'enterotp', component: EnterOtpComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
