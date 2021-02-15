//Сервис используеться для получения условного ID с ссылки.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIdService {

 public getIdFromUrl(url: string): number {
   let arr = url.split('/');
  return +arr[arr.length - 2];
 }
}
