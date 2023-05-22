import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepinessMenuPagePageRoutingModule } from './sleepiness-menu-page-routing.module';

import { SleepinessMenuPagePage } from './sleepiness-menu-page.page';
import { SleepinessCardComponent } from '../data/sleepiness-card/sleepiness-card.component'; 
import { OvernightSleepCardComponent } from '../data/overnight-sleep-card/overnight-sleep-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessMenuPagePageRoutingModule
  ],
  declarations: [SleepinessMenuPagePage, OvernightSleepCardComponent, SleepinessCardComponent]
})
export class SleepinessMenuPagePageModule {}
