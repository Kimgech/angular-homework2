import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  @Input()
  sub !:string[];
  hide:boolean = true

  add:boolean = false
  ngOnInit(): void {
  }
  onClick(){
    this.hide = !this.hide,
    this.add = !this.add
  }
}
