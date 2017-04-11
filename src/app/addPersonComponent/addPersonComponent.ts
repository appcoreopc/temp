import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>add person {{name}}</h1>`
})
export class AddPersonComponent { name = 'Angular'; }
