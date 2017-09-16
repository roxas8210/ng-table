import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';
import { loadSvgResources } from './utils/svg.utils';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule
    // BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  declarations: [HeaderComponent, FooterComponent, SidenavComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer ) {
    if (parent) {
      throw new Error('模块已经存在');
    }
    loadSvgResources( ir, ds);
  }
 }
