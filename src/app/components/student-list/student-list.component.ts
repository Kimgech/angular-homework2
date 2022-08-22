import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from 'src/app/model/istudent';
import { ISubject } from 'src/app/model/isubject';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  sub!:ISubject[];
  stu!: IStudent[];

  constructor(private subService: SubjectService , private stuService:StudentService) { }

  ngOnInit(): void {
    this.subService.subjectObs$.subscribe((subject:ISubject[])=>(this.sub = subject))
    // this.stuService.studentObs$.subscribe((student:IStudent[])=>(this.stu = student))
    this.stuService.getStudent().subscribe((student:IStudent[])=> this.stu = student)
  }

  onDelete(id:number){
    this.stu.splice(id,1);
  }
 
  
}
