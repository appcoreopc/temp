import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Lis component {{name}}</h1>`
})
export class ListComponent { name = 'Angular'; }
