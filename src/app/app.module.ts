import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppComponent } from './app.component';

import ButtonComponent from './button/button.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, CommonModule, AngularSvgIconModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
