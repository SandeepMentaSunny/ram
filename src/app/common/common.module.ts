import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './../core/header/header.component';
import { CommonComponent } from './common.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
    { path: '', component: CommonComponent }
]

@NgModule({
  declarations: [
    CommonComponent,
    HeaderComponent,
    SidebarComponent,
    ConsumerComponent,
    ModalComponent
],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CommonComponent]
})
export class CommonsModule { }
