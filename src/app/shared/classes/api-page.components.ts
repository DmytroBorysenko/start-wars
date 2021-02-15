// Это базовый класс, для загрузки планеты и человека.

import { ApiPathConstants } from 'src/app/constants';
import { IColumn } from './../models/IColumn';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

export abstract class ApiPageComponent<T> {
  public entity: T;
  public columns: IColumn[];
  public idPlanet: number;
  public loading: boolean;
  public loadingResidents: boolean;

  constructor(public route: ActivatedRoute, public router: Router, public http: HttpClient, public name: string = '' ) {
    //С "url" нашей страницы достаем условный ID и по нему делаем загрузку.
    this.idPlanet = +route.snapshot.paramMap.get('id');
    this.getEntity(this.idPlanet);
    if(!this.idPlanet) {
      this.router.navigate(['']);
    }
  }

  public getEntity(id: number) {
    this.loading = true;
    this.http.get<any>(ApiPathConstants.BASEAPIURL + this.name + id + '/').subscribe( el => {
      this.entity = el;
      this.loadResidents();
      this.loading = false;
    }, error => {
      this.loading = false;
      console.error(error);
    })
  }

  public getResident(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  protected loadResidents() { return }
}
