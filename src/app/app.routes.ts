import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: 'magics', loadChildren: () => import('./magics/magics.module').then(m => m.MagicsModule) }
];
