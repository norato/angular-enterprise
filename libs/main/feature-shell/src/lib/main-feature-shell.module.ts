import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainFeatureShellComponent } from './main-feature-shell/main-feature-shell.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainFeatureShellComponent],
  exports: [MainFeatureShellComponent]
})
export class MainFeatureShellModule {}
