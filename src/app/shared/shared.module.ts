import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { DialogService } from './services/dialog.sevice';

import { AutoFocusDirective } from './directive/autofocus.directive';
import { DropdownTriggerForDirective } from './directive/dropdown-for.directive';

import IconComponent from './components/icon/icon.component';
import ButtonComponent from './components/button/button.component';
import DropdownComponent from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    DropdownComponent,
    DropdownTriggerForDirective,
    AutoFocusDirective,
  ],
  imports: [CommonModule, AngularSvgIconModule.forRoot(), OverlayModule],
  exports: [
    ButtonComponent,
    IconComponent,
    DropdownComponent,
    DropdownTriggerForDirective,
    AutoFocusDirective,
  ],
  providers: [DialogService],
})
export class SharedModule {}
