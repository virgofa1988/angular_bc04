import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  isSick = true;
  month = 0;
  monthOptions = [
    {value:1, label:'January'},
    {value:2, label:'February'},
    {value:3, label:'March'},
    {value:4, label:'April'}
  ]
  isLogin = false;
  userName:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }
  // onFeeling (val:boolean){
  //   this.isSick = val;
  // }

//   onChangeMonth (month : number){
//     this.month = month
//   }
// }
onLogin (){
  if (this.userName === "cybersoft" && this.password ==="cybersoft"){    
    this.isLogin = true;
  }
}
}