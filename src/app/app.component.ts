import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div class="wrapper">
        sdsdsdsdsd

        <chromosome-button
          [dropdownTriggerFor]="dropdown"
          [label]="'Open dropdown'"
          [type]="'ghost'"
        ></chromosome-button>
        <chromosome-dropdown #dropdown>
          <div (click)="test()" class="dropdown-item">Cut</div>
          <div (click)="test()" class="dropdown-item">Copy</div>
          <div (click)="test()" class="dropdown-item">Paste</div>
        </chromosome-dropdown>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'chromosome';

  test() {
    console.log('click');
  }
}
