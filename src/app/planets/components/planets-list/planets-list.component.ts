//Наследуюсь от базового класса и загружаю каталог.

import { ApiPathConstants } from './../../../constants';
import { Component } from '@angular/core';
import { ApiListComponent } from 'src/app/shared/classes/api-list.component';
import { ApiPlanetsModel } from 'src/app/shared/models/Planets';
import { HttpClient } from '@angular/common/http';
import { PlanetsListService } from '../../services/planets-list.service';
import { GetIdService } from 'src/app/shared/services/get-id.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent extends ApiListComponent<ApiPlanetsModel> {
  public nextPageUrl: string;
  constructor(http: HttpClient, public planetsListService: PlanetsListService, private getIdService: GetIdService) {
    super(http, ApiPathConstants.PLANETS);
    this.columns = this.planetsListService.loadColumn();
    this.loadItems();
   }
   public mapData(data) {
     //когда приходят данные, проставляю условный ID планетам.
     (data as ApiPlanetsModel).results.forEach( el => {
      el.id = this.getIdService.getIdFromUrl(el.url);
     })
      //в переменную "results" записываю каталог планет если он пустой то все данные что пришли(это припервой загрузки) а потом присоединяю уже к существующим.
    this.results
      ? this.results = this.results.concat((data as ApiPlanetsModel).results)
      : this.results = (data as ApiPlanetsModel).results;
    this.total = (data as ApiPlanetsModel).count;
    this.nextPageUrl = (data as ApiPlanetsModel).next;
    return data
   }

   //Функци при нажатии записует в "nextURL" новое значения чем вызавает загрузку данных.
   public loadMore() {
     this.nextURL.next(this.nextPageUrl);
   }

}
