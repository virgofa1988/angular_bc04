import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  fullName = "Jay Nguyen";
  age = 18;
  email='jaynguyen@gmail.com';
  logo = "../../assets/img/angular-img.png";
  constructor() { }

  ngOnInit(): void {
  }

  showMessage(mess){
    console.log(this.fullName,this.age, mess)
    
  }
  increaseAges(){
    this.age ++;
  }

}
