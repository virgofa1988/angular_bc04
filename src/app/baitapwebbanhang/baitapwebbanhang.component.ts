import { Component, OnInit } from '@angular/core';
import { GHphone } from '../Models/Phone/GHphone';
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
  gioHang:GHphone[] =[]
  tongTien:number = 0;
  constructor() { }


  onSelectedItem(item:Phone){
  //   let GHitem =  {
  //     id: item.id,
  //     name: item.name,
  //     image: item.image,
  //     description: item.description,
  //     price:item.price,
  //     inventory:  item.inventory,
  //     rating:  item.rating,
  //     quantity:1,
  // }; ==>ES6 có thể thay thế bằng 1 dòng này
    let GHitem = {...item,quantity:1}

    let index = this.gioHang.findIndex(sp => sp.id ===item.id )
    if(index === -1){
      this.gioHang.push(GHitem)      
    } else {
      this.gioHang[index].quantity +=1
          }
          this.tongTien = this.tinhTongTien()
    // this.tongTien = this.gioHang.reduce((tong,sp,index)=>{
    //   return tong += sp.price *sp.quantity
    // },0)
    
    console.log("Gio Hang", this.gioHang)
    console.log("tong Tien",this.tongTien)
  }
  tangGiamSL(id:number,sl:number){
    // console.log(id,sl)
    let index = this.gioHang.findIndex(sp => sp.id ===id);
    // console.log(index)
    if (index!==-1 ){
      this.gioHang[index].quantity += sl
    } 
    if(this.gioHang[index].quantity < 1){
      this.gioHang[index].quantity -= sl
    }
    this.tongTien = this.tinhTongTien()
    // this.tongTien = this.gioHang.reduce((tong,sp,index)=>{
    //   return tong += sp.price *sp.quantity
    // },0)
  }
  deleteItem(id:number){
    this.gioHang = this.gioHang.filter(sp =>sp.id !== id)
    this.tongTien = this.tinhTongTien()
    // this.tongTien = this.gioHang.reduce((tong,sp,index)=>{
    //   return tong += sp.price *sp.quantity
    // },0)
  }
  tinhTongTien(){
    let Total = this.gioHang.reduce((tong,sp,index)=>{
      return tong += sp.price *sp.quantity
    },0)
    return Total
  }
  onThanhToan(){
    localStorage.setItem("gioHang",JSON.stringify(this.gioHang))
    this.gioHang = []
    this.tongTien=this.tinhTongTien()
  }
  //lifecycle
  ngOnInit(): void {  
    this.gioHang = JSON.parse(localStorage.getItem("gioHang") )
    this.tongTien = this.tinhTongTien()
  }

}
