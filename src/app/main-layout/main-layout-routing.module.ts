import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutPageComponent } from './components/main-layout-page/main-layout-page.component';


const routes: Routes = [
    {path: '', component: MainLayoutPageComponent, children: [
      { path: '',loadChildren: () => import('../planets/planets.module').then(m => m.PlanetsModule) },
      { path: 'people/:id', loadChildren: () => import('../people/people.module').then(m => m.PeopleModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
