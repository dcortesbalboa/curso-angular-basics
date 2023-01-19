import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroresModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
