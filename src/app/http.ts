import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate, Elector, Person, PersonType } from './adding/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080';


  addPerson(person: Person, type: PersonType) {
    return this.http.post(`${this.url}/${type}`, person);
  }

  getElectors(): Observable<Elector[]> {
    return this.http.get<Elector[]>(`${this.url}/electors/not-voted`)

  }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.url}/candidates`)
  }

  vote(electorId: number, candidateId: number) {
    return this.http.post(`${this.url}/vote?electorId=${electorId}&candidateId=${candidateId}`, {});
  }
}
