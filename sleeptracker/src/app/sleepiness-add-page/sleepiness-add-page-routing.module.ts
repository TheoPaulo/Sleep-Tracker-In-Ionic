import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepinessAddPagePage } from './sleepiness-add-page.page';

const routes: Routes = [
  {
    path: '',
    component: SleepinessAddPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepinessAddPagePageRoutingModule {}
