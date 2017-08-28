import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdListModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class CoreModule { }
