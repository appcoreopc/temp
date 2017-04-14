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

    //search.set('action', 'opensearch');
    //search.set('search', term);
    //search.set('format', 'json');

    //this.term.valueChanges
    //           .debounceTime(400)        // wait for 400ms pause in events
    //            .distinctUntilChanged()   // ignore if next search term is same as previous
    //           .subscribe(term => this.wikipediaService.search(term).then(items => this.items = items));

    //this.firstname.valueChanges

  }
}
