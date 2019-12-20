import { Injectable, Output, EventEmitter } from '@angular/core';
import { Config } from '../config/config';
import { map } from 'rxjs/operators';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  @Output() public filterEvent: EventEmitter<any> = new EventEmitter();
  @Output() public checkboxEvent: EventEmitter<any> = new EventEmitter();
  @Output() public characterFilterEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: ApiCallService
    ) {
   }

  getManulalCharacter(reqParam) {
    let apiUrl = Config.apiUrls.character;
    if (reqParam) {
      apiUrl = `${Config.apiUrls.character}?${reqParam}`;
    }
    return this.http
      .invoke({
        method: Config.apiMethods.get,
        path: apiUrl
      })
      .pipe(map(response => response));
  }


}
