//Используя интерфейс "IColumn" сделал небольшые настройки отображения данных.

import { IColumn } from './../../shared/models/IColumn';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetsListService {

  public loadColumn(): IColumn[] {
    return [
      { field: 'img', typeShow: 'img', mainInfo: true },
      { field: 'name', header: 'Name',  mainInfo: true },
      { field: 'rotation_period', header: 'Rotation period' },
      { field: 'diameter', header: 'Diameter' },
      { field: 'climate', header: 'Climate', mainInfo: true },
      { field: 'gravity', header: 'Gravity' },
      { field: 'terrain', header: 'Terrain' },
      { field: 'population', header: 'Population', mainInfo: true },
      { field: 'people', header: 'Residents', typeShow: 'array' },
    ]
  }
}
