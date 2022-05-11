import { SharedUiComponentsModule } from '@ae/shared/ui-components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ClienteLolFeatureShellComponent } from './cliente-lol-feature-shell/cliente-lol-feature-shell.component';

export const clienteLolFeatureShellRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@ae/common/landing-page').then(m => m.CommonLandingPageModule),
  },
  {
    path: '',
    loadChildren: () => import('@ae/common/auth').then(m => m.CommonAuthModule),
  },
  {
    path: '',
    loadChildren: () => import('@ae/cliente-lol/calendar').then(m => m.ClienteLolCalendarModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(clienteLolFeatureShellRoutes), SharedUiComponentsModule],
  declarations: [ClienteLolFeatureShellComponent],
  exports: [ClienteLolFeatureShellComponent],
})
export class ClienteLolFeatureShellModule {}
