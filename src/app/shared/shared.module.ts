import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule,
  MdButtonModule,
  MdListModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule
  ],
  exports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule
  ],
  declarations: [],
})
export class SharedModule { }
