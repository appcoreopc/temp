import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: `./searchComponent.html`
})
export class SearchComponent { 

  name = 'Angular'; 
  firstname = new FormControl();
  lastname = new FormControl();

  constructor() {
    //this.firstname.valueChanges
  }
}
