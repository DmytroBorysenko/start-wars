// Это базовый класс, для загрузки каталога как планет так и людей.

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest, throwError  } from 'rxjs';
import { catchError, map, share, switchMap } from 'rxjs/operators';
import { ApiPathConstants } from 'src/app/constants';
import { IColumn } from '../models/IColumn';

export abstract class ApiListComponent<T> {

  public baseURL: string = ApiPathConstants.BASEAPIURL;
  public data: Observable<any>;
  public total: number;
  public results: any;
  public columns: IColumn[];
  public isLoadingResults: boolean;
  public nextURL = new BehaviorSubject<string>(`${this.baseURL + this.name}?page1`);

  constructor(public http: HttpClient, public name: string = '') { }

  protected loadItems() {
    // Использовал "combineLatest" для загрузки каждый раз если у нас меняеться значения "nextURL".
    this.data = combineLatest([this.nextURL])
      .pipe(
        switchMap(([nextURL]) => {
          this.isLoadingResults = true;
          return this.getRowsItems(nextURL);
        }),
        share(),
        map((data:T) => {
          this.isLoadingResults = false;
          return this.mapData(data);
        }),
        catchError((error) => {
          this.isLoadingResults = false;
          return throwError(error);
        }),
      );
  }

  public getRowsItems(requestUrl: string): Observable<T> {
    return this.http.get<T>(encodeURI(requestUrl))
  }

  protected mapData(data): Observable<any> {
    return data;
  }

}
