import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Candidate, Elector } from '../../adding/person.model';

@Component({
  selector: 'app-voting',
  imports: [CommonModule, FormsModule],
  templateUrl: './voting.html',
  styleUrl: './voting.scss',
})
export class Voting implements OnInit {
  electorsList$ = new Observable<Elector[]>();
  candidatesList$ = new Observable<Candidate[]>();
  selectedCandidate!: number
  selectedElector!: number
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.reloadList()
  }

  reloadList() {
    this.electorsList$ = this.httpService.getElectors()
    this.candidatesList$ = this.httpService.getCandidates();
  }

  selectElector(electorId: number) {
    this.selectedElector = electorId
  }

  selectCandidate(candidateId: number) {
    this.selectedCandidate = candidateId;
  }

  vote() {
    this.httpService.vote(this.selectedElector, this.selectedCandidate)
      .subscribe((data: any) => {
        this.reloadList()
        this.selectedCandidate = 0;
        alert(data.message);
      })
  }

}
