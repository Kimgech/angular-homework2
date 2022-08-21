import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISubject } from '../model/isubject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {

  //create obserable
  subjectObs$!:  Observable<ISubject[]>;
  subject: ISubject[] = [
    { subject: 'Spring' },
    { subject: 'DevOps' },
    { subject: 'Data Analytics' },
    { subject: 'iOS' },
    { subject: 'Android' },
    { subject: 'Blockchain' }
  ];
  constructor() {
    this.subjectObs$ = of(this.subject);
  }
}
