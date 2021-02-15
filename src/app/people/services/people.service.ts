//Используя интерфейс "IColumn" сделал небольшые настройки отображения данных.

import { Injectable } from '@angular/core';
import { IColumn } from 'src/app/shared/models/IColumn';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  public loadColumn(): IColumn[] {
    return [
      { field: 'name', header: 'Name' },
      { field: 'height', header: 'Height' },
      { field: 'mass', header: 'Weight' },
      { field: 'gender', header: 'Gender' },
    ]
  }
}
