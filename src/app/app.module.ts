import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UvgBlackRulesComponent } from './uvg-black-rules/uvg-black-rules.component';
import { UvgBlackSheetComponent } from './uvg-black-sheet/uvg-black-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    UvgBlackRulesComponent,
    UvgBlackSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
