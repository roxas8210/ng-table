import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdCardModule, MdButtonModule, MdListModule } from "@angular/material";

import { routing } from "./list.routers";

import { ListCardComponent } from "./list-card/list-card.component";

@NgModule({
  imports: [
    CommonModule,
    routing,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdListModule
  ],
  declarations: [
    ListCardComponent
  ]
})
export class ListModule { }
