import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';
@Injectable({
  providedIn: 'root'
})
// export class DjangoapiService {

//   constructor() { }
// }
export class DjangoapiService {
  apiURL = 'http://127.0.0.1:8000/api';
  
  constructor(private http: HttpClient) { }

  getUser():Observable<any>{
    return this.http.get(this.apiURL+'/lista_user')
    .pipe(retry(3));
  }

  getViaje():Observable<any>{
    return this.http.get(this.apiURL+'/lista_viaje')
    .pipe(retry(3));
  }
  
}