import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicContentOutletModule } from './dynamic-content-outlet/dynamic-content-outlet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicContentOutletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
