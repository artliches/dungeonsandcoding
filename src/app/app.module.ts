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
import { WhitehackVerticalSheetComponent } from './whitehack-vertical-sheet/whitehack-vertical-sheet.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WhitehackHorizontalComponent } from './whitehack-horizontal-sheet/whitehack-horizontal/whitehack-horizontal.component';
import { WhNameComponent } from './whitehack-horizontal-sheet/wh-name/wh-name.component';
import { WhTraitsComponent } from './whitehack-horizontal-sheet/wh-traits/wh-traits.component';
import { WhStatsComponent } from './whitehack-horizontal-sheet/wh-stats/wh-stats.component';
import { WhSlotsComponent } from './whitehack-horizontal-sheet/wh-slots/wh-slots.component';
import { WhJobDescripComponent } from './whitehack-horizontal-sheet/wh-job-descrip/wh-job-descrip.component';
import { WhCombatComponent } from './whitehack-horizontal-sheet/wh-combat/wh-combat.component';
import { WhInventoryComponent } from './whitehack-horizontal-sheet/wh-inventory/wh-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    UvgBlackRulesComponent,
    UvgBlackSheetComponent,
    VampirePanicSheetComponent,
    UvgWhiteSheetComponent,
    WhitehackVerticalSheetComponent,
    CalendarComponent,
    WhitehackHorizontalComponent,
    WhNameComponent,
    WhTraitsComponent,
    WhStatsComponent,
    WhSlotsComponent,
    WhJobDescripComponent,
    WhCombatComponent,
    WhInventoryComponent
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
