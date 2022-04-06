import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <chromosome-icon
        [iconUrl]="'../assets/icons/archive.svg'"
      ></chromosome-icon>
    </div>
  `,
})
export class AppComponent {
  title = 'chromosome';
}
