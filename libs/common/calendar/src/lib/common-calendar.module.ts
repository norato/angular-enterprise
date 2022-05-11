import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { CommonCalendarContainersModule } from './common-calendar-containers.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'calendar', component: CalendarComponent }]),
    CommonCalendarContainersModule
  ],
  declarations: [CalendarComponent],
})
export class CommonCalendarModule {}
