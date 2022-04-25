import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CalendarComponent } from './calendar/calendar.component';
import { WhitehackOmnibusComponent } from './whitehack-omnibus/whitehack-omnibus.component';
import { OmniTitleComponent } from './whitehack-omnibus/omni-title/omni-title.component';
import { OmniNameComponent } from './whitehack-omnibus/omni-name/omni-name.component';
import { OmniStatsComponent } from './whitehack-omnibus/omni-stats/omni-stats.component';
import { OmniTraitsComponent } from './whitehack-omnibus/omni-traits/omni-traits.component';
import { OmniJobComponent } from './whitehack-omnibus/omni-job/omni-job.component';
import { OmniSlotsComponent } from './whitehack-omnibus/omni-slots/omni-slots.component';
import { OmniSpecialComponent } from './whitehack-omnibus/omni-special/omni-special.component';
import { OmniInventoryComponent } from './whitehack-omnibus/omni-inventory/omni-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    WhitehackOmnibusComponent,
    OmniTitleComponent,
    OmniNameComponent,
    OmniStatsComponent,
    OmniTraitsComponent,
    OmniJobComponent,
    OmniSlotsComponent,
    OmniSpecialComponent,
    OmniInventoryComponent
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
