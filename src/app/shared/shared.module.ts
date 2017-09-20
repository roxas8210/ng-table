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
  MdNativeDateModule,
  MdSlideToggleModule
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
    MdNativeDateModule,
    MdSlideToggleModule
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
    MdNativeDateModule,
    MdSlideToggleModule
  ],
  declarations: [],
})
export class SharedModule { }
