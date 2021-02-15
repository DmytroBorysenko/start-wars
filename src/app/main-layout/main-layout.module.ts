import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutPageComponent } from './components/main-layout-page/main-layout-page.component';



@NgModule({
  declarations: [MainLayoutPageComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
