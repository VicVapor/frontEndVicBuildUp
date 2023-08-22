import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";


import {Person} from "../interfaces/Person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  BASE_URL = '/api';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  getPerson(person_Id: Number): Observable<Person> {
    return this.http.get<Person>(`${this.BASE_URL}/person/${person_Id}`)
  }

  getPersons(): Observable<Person[]> {
    // return this.http.get<Person[]>(`${this.BASE_URL}/person`);
    return this.http.get<Person[]>(`${this.BASE_URL}/person`)
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.BASE_URL}/person`, person);
  }

  deletePerson(person_Id: Number): Observable<Person> {
    return this.http.delete<Person>(`${this.BASE_URL}/person/${person_Id}`);
  }

  updatePerson(person_Id: Number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.BASE_URL}/person/${person_Id}`, person);
  }

}
