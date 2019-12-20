import { Injectable } from '@angular/core';

// import { Injectable } from '@angular/core';
// import { Config } from '../config/config';
// import { map } from 'rxjs/operators';
// import { ApiCallService } from './api-call.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class ManagerService {

  constructor(
    // private http: HttpClient
    ) {
    console.log('=-======');

   }

  // getManulalCharacter() {
    // const apiUrl = Config.apiUrls.character;
    // return this.http
    //   .invoke({
    //     method: Config.apiMethods.get,
    //     path: apiUrl
    //   })
    //   .pipe(map(response => response));

    // return this.http.get('https://rickandmortyapi.com/api/character');
  // }

  testing() {
    return 'hello';
  }

}
