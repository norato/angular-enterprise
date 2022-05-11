import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClienteLolCalendarComponent } from './cliente-lol-calendar/cliente-lol-calendar.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'calendar',
        pathMatch: 'full',
        component: ClienteLolCalendarComponent,
      },
    ]),
  ],
  declarations: [ClienteLolCalendarComponent],
})
export class ClienteLolCalendarModule {}
