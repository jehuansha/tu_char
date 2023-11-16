import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'

//Generamos un modelo interface para el usuario que llamara la base de datos
interface User {
  username: "pepe23";
  password: "123";
}

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  autenticado:boolean=false;

  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {

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