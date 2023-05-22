import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'overnight-log-add-page',
    loadChildren: () => import('./overnight-log-add-page/overnight-log-add-page.module').then( m => m.OvernightLogAddPagePageModule)
  },
  {
    path: 'sleepiness-add-page',
    loadChildren: () => import('./sleepiness-add-page/sleepiness-add-page.module').then( m => m.SleepinessAddPagePageModule)
  },
  {
    path: 'sleepiness-menu-page',
    loadChildren: () => import('./sleepiness-menu-page/sleepiness-menu-page.module').then( m => m.SleepinessMenuPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
