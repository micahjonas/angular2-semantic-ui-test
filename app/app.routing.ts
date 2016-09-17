import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }      from './hero-detail.component';
import { GiftListComponent } from './gift-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/gifts',
    pathMatch: 'full'
  },
  {
    path: 'gifts',
    component: GiftListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
