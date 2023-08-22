import {Component} from '@angular/core';
import {PersonService} from "../../services/person.service";


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent {
  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    console.log("Hola mundo")
    this.getPersons();
  }

  getPersons() {
    // Explicación de esta forma: Se
    // console.log("Nueva forma: " + this.personService.getPersons().subscribe({
    //     next(persons) {
    //       for (const person of persons){
    //         console.log(persons);
    //       }
    //     },
    //     error(error) {
    //       console.log(error);
    //     },
    //     complete() {
    //       console.log('Completed');
    //     }
    //   }
    // ));
    this.personService.getPersons().subscribe(
      (response) => {
        console.log("Forma simplificada.");
        console.log(response);
      }
    )
  }

}
