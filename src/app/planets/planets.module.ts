import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetsRoutingModule } from './plahets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlanetPageComponent } from './components/planet-page/planet-page.component';



@NgModule({
  declarations: [PlanetsListComponent, PlanetPageComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    SharedModule
  ]
})
export class PlanetsModule { }
