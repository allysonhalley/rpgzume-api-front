import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {MainLayoutComponent} from "./main-layout/main-layout.component";

export const appRoutes: Routes = [
  { path: '', component: MainLayoutComponent, // Página inicial
    children: [
      { path: '', component: IndexComponent },
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
      { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
      { path: 'magics', loadChildren: () => import('./magics/magics.module').then(m => m.MagicsModule) }
    ]
  },
  { path: '**', redirectTo: '' } // Página não encontrada
];
