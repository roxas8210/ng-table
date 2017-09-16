import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { SharedModule } from './shared/shared.module';
import { ListModule } from './list/list.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { routing } from './app.routers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    routing,
    // SharedModule,
    CoreModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
