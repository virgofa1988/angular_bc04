import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {demoComponent} from '../app/Demo/demo.component';
import { HeaderComponent } from './BaiTap_Chiacomponent/header/header.component';
import { SidebarComponent } from './BaiTap_Chiacomponent/sidebar/sidebar.component';
import { ContentComponent } from './BaiTap_Chiacomponent/content/content.component';
import { FooterComponent } from './BaiTap_Chiacomponent/footer/footer.component';
import { HomeComponent } from './BaiTap_Chiacomponent/home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { BaitapbindingdataComponent } from './databinding/baitapbindingdata/baitapbindingdata.component'

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
    BaitapbindingdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Sử dụng cơ chế binding 2 chiều
  ],
  providers: [],
  bootstrap: [AppComponent] //Component gốc lấy tất cả component con render ra giao diện
})
export class AppModule { }
