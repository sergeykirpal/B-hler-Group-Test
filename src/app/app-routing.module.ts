import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    preloadingStrategy: PreloadAllModules
  }), SharedModule],
  exports: [RouterModule, SharedModule]
})
export class AppRoutingModule { }
