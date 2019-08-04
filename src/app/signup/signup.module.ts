import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';
const routes: Routes = [
    { path: '', component: SignupComponent }
]

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
