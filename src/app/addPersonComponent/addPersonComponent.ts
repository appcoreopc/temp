import { Component } from '@angular/core';
import { PersonService } from '../services/PersonService'
import { Person } from '../Person'
@Component({
  selector: 'my-app',
  templateUrl: './AddPersonComponent.html'
})

export class AddPersonComponent {

  person: Person = new Person();

  constructor(private personService: PersonService) {
  }

  addPerson(): void {
    let p = new Person({
      firstName: '',
      lastName: "",
      age: 12
    });

    this.personService.addPerson(p);
  }

  onSubmit(person: Person): void {
    console.log('test submit add person');
  }
}

