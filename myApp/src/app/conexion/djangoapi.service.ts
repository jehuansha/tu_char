import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class DjangoapiService {
  apiURL = 'http://127.0.0.1:8000/api';
  
  constructor(private http: HttpClient) { }

  getUser():Observable<any>{
    return this.http.get(this.apiURL+'/lista_user')
    .pipe(retry(3));
  }
  crearUsuario(usuarioData: any): Observable<any> {
    return this.http.post(this.apiURL + '/lista_user', usuarioData);
  }
  
  getViaje():Observable<any>{
    return this.http.get(this.apiURL+'/lista_viaje')
    .pipe(retry(3));
  }



  login(username: string, password: string){
    const data={
      username: username,
      password: password
    };
    return this.http.post(this.apiURL + '/Autenti', data).pipe(
      map((response: any)=>{
        if(response && typeof response==='object'){
          const keys=Object.keys(response);
          if(keys.length>0){
            return response[keys[0]]
          }else{
            return null
          }
        }
      })
    );
  }


}
