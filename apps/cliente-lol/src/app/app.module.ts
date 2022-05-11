import { ClienteLolFeatureShellModule } from '@ae/cliente-lol/feature-shell';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClienteLolFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
