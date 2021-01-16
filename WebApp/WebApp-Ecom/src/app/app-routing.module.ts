import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [ 
{path: '',   redirectTo: 'account/login', pathMatch: 'full' },
{path: 'account', loadChildren: () => import(`./account/modules/account.module`).then(m => m.AccountModule) },
{path: 'dashboard', component: DashboardComponent},
{path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

