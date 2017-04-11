import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>search component {{name}}</h1>`
})
export class SearchComponent { name = 'Angular'; }
