import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainFeatureShellRoutingModule } from './main-feature-shell-routing.module';
import { MainFeatureShellComponent } from './main-feature-shell/main-feature-shell.component';

@NgModule({
  imports: [CommonModule, MainFeatureShellRoutingModule],
  declarations: [MainFeatureShellComponent],
  exports: [MainFeatureShellComponent, ]
})
export class MainFeatureShellModule {}
