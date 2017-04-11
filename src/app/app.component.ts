import { RouterLink, RouterLinkActive } from '@angular/router/router';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<base href="/">
  <nav>
    <a RouterLink="/add" RouterLinkActive="active"> Add </a>
    <a RouterLink="/list">List </a>
  </nav>
  <router-outlet></router-outlet> <h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }

