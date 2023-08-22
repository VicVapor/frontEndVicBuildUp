import {Component} from '@angular/core';
import {Person} from "../../interfaces/Person";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  person: Person = {
    email: '',
    person_Password: '',
    first_Name: '',
    last_Name: '',
    age: 0,
    phone: 0
  };

  constructor() {
  }

  submitPerson(){
    console.log(this.person);
  }

}
