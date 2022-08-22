import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgControl, NgForm, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { IStudent } from 'src/app/model/istudent';
import { ISubject } from 'src/app/model/isubject';
import { StudentService } from 'src/app/services/student.service';
// import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css'],
})
export class FormStudentComponent implements OnInit {

  hide: boolean = true;
  add: boolean = false;

  sub: ISubject[] = [];
  stu!:IStudent;
  submit = false;
  studentForm = this.student.group({
    name:['', Validators.required],
    gender:['', Validators.required],
    subject:['',Validators.required]
  })

  constructor(private subService: SubjectService , private student: FormBuilder , private stuService: StudentService) {}

  ngOnInit(): void {
    this.subService.subjectObs$.subscribe(
      (subject: ISubject[]) => (this.sub = subject)
    );
    // this.studentService.studentObs$.subscribe(
    //   (student:IStudent[])=>(this.stu = student)
    // );
  }
  onClick() {
    (this.hide = !this.hide), (this.add = !this.add);
  }

  submitted(){
      this.submit=true;
      console.log("Submitted");
      this.stu = <IStudent> this.studentForm.value;
      this.stuService.addStudent().subscribe((students:IStudent[])=>{
        students.push(this.stu)
      })
      console.log(this.stu);
      
  }
}
