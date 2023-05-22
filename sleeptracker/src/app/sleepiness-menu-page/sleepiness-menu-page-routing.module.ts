import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepinessMenuPagePage } from './sleepiness-menu-page.page';

const routes: Routes = [
  {
    path: '',
    component: SleepinessMenuPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepinessMenuPagePageRoutingModule {}
