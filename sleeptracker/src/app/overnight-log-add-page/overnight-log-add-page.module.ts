import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightLogAddPagePageRoutingModule } from './overnight-log-add-page-routing.module';

import { OvernightLogAddPagePage } from './overnight-log-add-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightLogAddPagePageRoutingModule
  ],
  declarations: [OvernightLogAddPagePage]
})
export class OvernightLogAddPagePageModule {}
