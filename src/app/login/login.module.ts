import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
const routes: Routes = [
    { path: '', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
  CommonModule,
  RouterModule.forChild(routes),
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
