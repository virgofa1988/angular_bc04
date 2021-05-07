import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitapbindingdata',
  templateUrl: './baitapbindingdata.component.html',
  styleUrls: ['./baitapbindingdata.component.scss']
})
export class BaitapbindingdataComponent implements OnInit {

  fullName = "Enter Full Name";
  email="Enter Email"  
  constructor() { }

  ngOnInit(): void {
  }
  // submitName(){
  //   this.fullName = this.fullNameInput
  // }
  setName(val:string){
    this.fullName = val
  }
}
