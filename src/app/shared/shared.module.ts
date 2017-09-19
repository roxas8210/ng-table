import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule,
  MdButtonModule,
  MdListModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  exports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [],
})
export class SharedModule { }
