//Компонент для загрузки планеты.

import { ApiPathConstants } from './../../../constants';
import { ResidentModels } from './../../../shared/models/Residents';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiPageComponent } from 'src/app/shared/classes/api-page.components';
import { PlanetModel } from 'src/app/shared/models/Planets';
import { PlanetsListService } from '../../services/planets-list.service';
import { GetIdService } from 'src/app/shared/services/get-id.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html'
})
export class PlanetPageComponent extends ApiPageComponent<PlanetModel> {

  constructor(public route: ActivatedRoute, public router: Router, public http: HttpClient,  public planetsListService: PlanetsListService,
    private getIdService: GetIdService) {
    super(route, router, http, ApiPathConstants.PLANETS);
    this.columns = this.planetsListService.loadColumn();
   }

   public loadResidents() {
     //Загрузка людей.
    this.loadingResidents = true;
    let residentsRequest = [];
    //Создал масив запросов через "this.getResident()" который принимает url.
    this.entity?.residents.forEach( el => {
      residentsRequest.push(this.getResident(el))
    });

    if(residentsRequest.length == 0 ) {
      this.loadingResidents = false;
      return;
    };
     // Через "forkJoin" подписался на выполнения всех запросов.
    forkJoin(residentsRequest).subscribe((data: ResidentModels[]) => {
      data.forEach(el => {
        // Добавил условный ID а также вспомагательную функцию которая делает переход на страницу людей.
        el.id = this.getIdService.getIdFromUrl(el.url);
        el.func = () => {this.router.navigate([`/people/${el.id}`]);}
      });
      this.entity.people = data;
      this.loadingResidents = false;
    })
   }

}
