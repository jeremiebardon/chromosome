import { Component, Input } from '@angular/core';

@Component({
  selector: 'chromosome-icon',
  template: `<svg-icon [src]="iconUrl" [svgStyle]="style"></svg-icon>`,
  styleUrls: ['./icon.component.css'],
})
export default class IconComponent {
  /**
   * Absosolute url to icon
   */
  @Input()
  iconUrl: string = '';

  /**
   * Svg style
   */
  @Input()
  style: object = {};
}
