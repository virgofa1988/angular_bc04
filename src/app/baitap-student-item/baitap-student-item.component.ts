import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-baitap-student-item',
  templateUrl: './baitap-student-item.component.html',
  styleUrls: ['./baitap-student-item.component.scss']
})
export class BaitapStudentItemComponent implements OnInit {
@Input() student:{name:string;age:number}
@Output() studentEmiter = new EventEmitter() //Hàm để đưa dữ liệu từ con ra cha
  constructor() { }

  ngOnInit(): void {
  }
  onChooseStudent (){
    this.studentEmiter.emit(this.student)
  }
}
