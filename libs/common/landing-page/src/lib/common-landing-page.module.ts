import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CommonLandingPageComponent } from './common-landing-page/common-landing-page.component';

export const commonLandingPageRoutes: Route[] = [
  {
    path: '',
    component: CommonLandingPageComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(commonLandingPageRoutes)],
  declarations: [CommonLandingPageComponent],
  exports: [RouterModule],
})
export class CommonLandingPageModule {}
