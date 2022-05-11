import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarTitleComponent } from './containers/calendar-title/calendar-title.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'calendar', component: CalendarComponent }]),
  ],
  declarations: [CalendarComponent, CalendarTitleComponent],
})
export class CommonCalendarModule {}
