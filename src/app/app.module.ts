import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UvgBlackRulesComponent } from './uvg-black-rules/uvg-black-rules.component';
import { UvgBlackSheetComponent } from './uvg-black-sheet/uvg-black-sheet.component';
import { VampirePanicSheetComponent } from './vampire-panic-sheet/vampire-panic-sheet.component';
import { UvgWhiteSheetComponent } from './uvg-white-sheet/uvg-white-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    UvgBlackRulesComponent,
    UvgBlackSheetComponent,
    VampirePanicSheetComponent,
    UvgWhiteSheetComponent
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
