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
import { CyborgOmnibusComponent } from './cyborg-omnibus/cyborg-omnibus.component';
import { CyDescripComponent } from './cyborg-omnibus/cy-descrip/cy-descrip.component';
import { CyIdentityComponent } from './cyborg-omnibus/cy-identity/cy-identity.component';
import { CyStatsComponent } from './cyborg-omnibus/cy-stats/cy-stats.component';
import { CyGlitchesComponent } from './cyborg-omnibus/cy-glitches/cy-glitches.component';
import { CyEquipComponent } from './cyborg-omnibus/cy-equip/cy-equip.component';
import { CyNanoAppsComponent } from './cyborg-omnibus/cy-nano-apps/cy-nano-apps.component';
import { CyCyberComponent } from './cyborg-omnibus/cy-cyber/cy-cyber.component';
import { CyCombatComponent } from './cyborg-omnibus/cy-combat/cy-combat.component';
import { SafeHtmlPipe } from './safepipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SafeHtmlPipe,
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
    OmniInventoryComponent,
    CyborgOmnibusComponent,
    CyDescripComponent,
    CyIdentityComponent,
    CyStatsComponent,
    CyGlitchesComponent,
    CyEquipComponent,
    CyNanoAppsComponent,
    CyCyberComponent,
    CyCombatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
