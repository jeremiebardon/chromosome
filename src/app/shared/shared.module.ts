import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from './components/button/button.component';
import { DialogService } from './services/dialog.sevice';
import AvatarComponent from './components/avatar/avatar.component';
import IconComponent from './components/icon/icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ButtonComponent, AvatarComponent, IconComponent],
  imports: [CommonModule, AngularSvgIconModule.forRoot()],
  exports: [ButtonComponent, AvatarComponent, IconComponent],
  providers: [DialogService],
})
export class SharedModule {}
