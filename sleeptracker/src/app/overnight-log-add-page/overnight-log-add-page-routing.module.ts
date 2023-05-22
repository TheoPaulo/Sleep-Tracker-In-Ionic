import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightLogAddPagePage } from './overnight-log-add-page.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightLogAddPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightLogAddPagePageRoutingModule {}
