import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import {demoComponent} from '../app/Demo/demo.component';
import { HeaderComponent } from './BaiTap_Chiacomponent/header/header.component';
import { SidebarComponent } from './BaiTap_Chiacomponent/sidebar/sidebar.component';
import { ContentComponent } from './BaiTap_Chiacomponent/content/content.component';
import { FooterComponent } from './BaiTap_Chiacomponent/footer/footer.component';
import { HomeComponent } from './BaiTap_Chiacomponent/home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { BaitapbindingdataComponent } from './databinding/baitapbindingdata/baitapbindingdata.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { Baitap7DirectiveComponent } from './baitap7-directive/baitap7-directive.component';
import { BaitapStudentListComponent } from './baitap-student-list/baitap-student-list.component';
import { BaitapStudentItemComponent } from './baitap-student-item/baitap-student-item.component';
import { BookingBusComponent } from './BaiTapGhe/booking-bus/booking-bus.component';
import { SeatItemComponent } from './BaiTapGhe/seat-item/seat-item.component';
import { BaitapwebbanhangComponent } from './baitapwebbanhang/baitapwebbanhang.component'

@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    DatabindingComponent,
    BaitapbindingdataComponent,
    DemoDirectiveComponent,
    Baitap7DirectiveComponent,
    BaitapStudentListComponent,
    BaitapStudentItemComponent,
    BookingBusComponent,
    SeatItemComponent,
    BaitapwebbanhangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Sử dụng cơ chế binding 2 chiều
    NgxPaginationModule // Sử dụng thư viện phân trang (Pagination)
  ],
  providers: [],
  bootstrap: [AppComponent] //Component gốc lấy tất cả component con render ra giao diện
})
export class AppModule { }
