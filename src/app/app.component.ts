import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>App works</h1>
      <app-hello-world></app-hello-world>
      <app-user-list></app-user-list>
    </div>`,
})
export class AppComponent {
  title = 'angular-hello-world';
}
