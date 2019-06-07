import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
    <!-- header -->
    <app-header></app-header>
    
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []

})
export class AppComponent {
  title = 'app';
}
