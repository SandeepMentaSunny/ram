import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren:() => import('./login/login.module').then(mod => mod.LoginModule) },
  { path: 'signup', loadChildren:() => import('./signup/signup.module').then(mod => mod.SignupModule) },
  { path: 'dashboard', loadChildren: () => import('./common/common.module').then(mod => mod.CommonsModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
