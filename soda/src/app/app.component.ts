import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'My Bichos', url: '/bichos', icon: 'bug' },

  ];
  public labels = ['Motus Pocho (Angular)', 'Bicho 2 (React)']
  constructor() { }
}
