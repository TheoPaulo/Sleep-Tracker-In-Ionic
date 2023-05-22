import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepinessAddPagePageRoutingModule } from './sleepiness-add-page-routing.module';

import { SleepinessAddPagePage } from './sleepiness-add-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessAddPagePageRoutingModule
  ],
  declarations: [SleepinessAddPagePage]
})
export class SleepinessAddPagePageModule {}
