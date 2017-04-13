import { Component } from '@angular/core';
import { PersonService } from '../services/PersonService'
import { Person } from '../Person'
@Component({
  selector: 'my-app',
  templateUrl: './AddPersonComponent.html'
})

export class AddPersonComponent {
  name = 'Angular';

  constructor(private personService: PersonService) {
  }


  addPerson(): void {
    console.log('test');
    var p: Person = {
      firstName: '', lastName: "", age: 12
    }
    this.personService.addPerson(p);
  }
}
