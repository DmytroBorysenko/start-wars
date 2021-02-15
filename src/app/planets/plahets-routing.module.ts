import { PlanetPageComponent } from './components/planet-page/planet-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';


const routes: Routes = [
    {path: '', component: PlanetsListComponent},
    {path: 'planet/:id', component: PlanetPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
