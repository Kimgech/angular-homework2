import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudent } from '../model/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentObs$ !:Observable<IStudent[]>;
  student!:IStudent[]

  constructor() {
    this.studentObs$ = of(this.student);
   }

   getStudent():Observable<IStudent[]>{
    return this.studentObs$;
   }

   addStudent():Observable<any>{
    return this.studentObs$;
   }

  //  getAllStudent():Observable<IStudent[]>{
  //   return this.studentObs$;
  //  }
  //  addNewStudent():Observable<any>{
  //   return this.studentObs$;
  //  }
}
