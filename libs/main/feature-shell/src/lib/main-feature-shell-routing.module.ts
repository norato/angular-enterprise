import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


export const mainfeatureShellRoutes: Route[] = [
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
    loadChildren: () => import('@ae/common/calendar').then(m => m.CommonCalendarModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainfeatureShellRoutes),
  ],
  exports: [RouterModule],
})
export class MainFeatureShellRoutingModule { }
