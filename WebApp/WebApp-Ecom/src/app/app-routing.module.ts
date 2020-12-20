import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EnterOtpComponent } from './component/enter-otp/enter-otp.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [ 
{path: '',   redirectTo: '/login', pathMatch: 'full' },
{path: 'login', component: LoginComponent},
{path: 'forgotpassword', component: ForgotPasswordComponent},
{path: 'enterotp', component: EnterOtpComponent},
{path: 'dashboard', component: DashboardComponent},
{ path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

