import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule, MdListModule } from '@angular/material';

import { routing } from './list.routers';
import { CompanyService } from './company.service';
import { CompanyApiService } from './company-api.service';

import { ListCardComponent } from './list-card/list-card.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    HttpModule
  ],
  providers: [{
    provide: 'companyService',
    useClass: CompanyService
  }, {
    provide: 'companyApiService',
    useClass: CompanyApiService
  }],
  declarations: [
    ListCardComponent,
    ListDetailsComponent,
    ListComponent
  ]
})
export class ListModule { }
