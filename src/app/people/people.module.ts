import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePageComponent } from './components/people-page/people-page.component';
import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PeoplePageComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
