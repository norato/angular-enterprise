import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const commonAuthRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(commonAuthRoutes)],
  declarations: [LoginComponent, RegisterComponent],
})
export class CommonAuthModule {}
