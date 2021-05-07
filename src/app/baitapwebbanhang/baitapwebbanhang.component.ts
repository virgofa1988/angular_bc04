import { Component, OnInit } from '@angular/core';
import {Phone} from '../Models/Phone/phone'
@Component({
  selector: 'app-baitapwebbanhang',
  templateUrl: './baitapwebbanhang.component.html',
  styleUrls: ['./baitapwebbanhang.component.scss']
})
export class BaitapwebbanhangComponent implements OnInit {

  smartPhones: Phone[] = [
    {
        id: 1,
        name: 'Oppo R1',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220438/oppo-reno5-trang-600x600-1-600x600.jpg',
        description: 'Sản phẩm của china',
        price: 450,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 9',
        image: 'https://cdn.tgdd.vn/Products/Images/42/218355/samsung-galaxy-note-20-xanh-new-600x600.jpg',
        description: 'Sản phẩm của Hàn Quốc',
        price: 200,
        inventory: 15,
        rating: 5
    }, {
        id: 3,
        name: 'Iphone XS',
        image: 'https://cdn.tgdd.vn/Products/Images/42/230412/iphone-se-2020-trang-600x600-600x600.jpg',
        description: 'Sản phẩm của US',
        price: 600,
        inventory: 20,
        rating: 4
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
