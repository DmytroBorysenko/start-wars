//Компонент для загрузки людей.

import { ResidentModels } from './../../../shared/models/Residents';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPathConstants } from 'src/app/constants';
import { ApiPageComponent } from 'src/app/shared/classes/api-page.components';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html'
})
export class PeoplePageComponent  extends ApiPageComponent<ResidentModels> {

  constructor(public route: ActivatedRoute, public router: Router, public http: HttpClient,  public peopleService: PeopleService) {
    super(route, router, http, ApiPathConstants.PEOPLE);
    this.columns = this.peopleService.loadColumn();
   }

}
