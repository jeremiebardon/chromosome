import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'ghost';

@Component({
  selector: 'chromosome-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  type: ButtonType = 'primary';

  /**
   * Button size
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public get classes(): string[] {
    return ['chromosome-button', `chromosome-button--${this.size}`, this.type];
  }
}
