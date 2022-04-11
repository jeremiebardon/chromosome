import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autoFocus]',
})
export class AutoFocusDirective implements AfterContentInit {
  @Input() autoFocus: boolean;

  constructor(private el: ElementRef) {}

  ngAfterContentInit(): void {
    if (this.autoFocus) {
      setTimeout(() => this.el.nativeElement.focus());
    }
  }
}
