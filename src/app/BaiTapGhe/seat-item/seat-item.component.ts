import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Seat} from '../../Models/Seat/seat'
@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent implements OnInit {
@Input() seatitem : Seat
@Output() selectedSeat = new EventEmitter()
isBooking :boolean = false;  
constructor() { }

  ngOnInit(): void {
  }
 onSelectingSeat(){
   if (this.seatitem.TrangThai) return; //Chặn trường hợp người dùng F12 loại bỏ property Disable
   this.selectedSeat.emit(this.seatitem);
   this.isBooking = !this.isBooking
 }
}
