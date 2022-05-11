import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'calendar', component: CalendarComponent },
    ]),
  ],
  declarations: [CalendarComponent],
})
export class CommonCalendarModule {}
