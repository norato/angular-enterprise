import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalendarTitleComponent } from './containers/calendar-title/calendar-title.component';



@NgModule({
  declarations: [
    CalendarTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarTitleComponent
  ]
})
export class CommonCalendarContainersModule { }
