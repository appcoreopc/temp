import { PersonService } from '../services/PersonService';
import { Component } from '@angular/core';
import { Person } from '../Person'

@Component({
  selector: 'my-app',
  templateUrl: './ListComponent.html'
})

export class ListComponent {

  name = 'Angular';
  data: Person[];

  constructor(private service: PersonService) {
  }

  ngOnInit() {
    var a = new Person();
    a.firstName = 'mark';
    a.lastName = 'woo';

    this.data = [a, a, a];

    if (this.service && this.service.listPerson())
      this.service.listPerson().subscribe(x => {
        this.data = x;
     });
  }
}
