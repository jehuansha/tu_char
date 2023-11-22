import { Injectable } from '@angular/core';


//Generamos un modelo interface para el usuario que llamara la base de datos

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  autenticado:boolean=false;

  constructor() {

  }
  
  Autenticacion(valor: boolean){
    if(valor){
      this.autenticado=true;
    }else{
      this.autenticado=false;
    }
}

returnVal(){
  return this.autenticado
}
}