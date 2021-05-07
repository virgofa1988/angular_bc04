import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-student-list',
  templateUrl: './baitap-student-list.component.html',
  styleUrls: ['./baitap-student-list.component.scss']
})
export class BaitapStudentListComponent implements OnInit {
studentList = [
  {name:"Captain America",age:30},
  {name:"Captain America 1",age:33},
  {name:"Captain America 2",age:39},
  {name:"Captain America 3",age:34},
  {name:"Captain America 4",age:31},
  {name:"Captain America 5",age:37},
]
  selectedStudent : {name:string,age:number}
  constructor() { }
  setSelectedStudent(e){
    this.selectedStudent = e
  }
  ngOnInit(): void {
  }

}
