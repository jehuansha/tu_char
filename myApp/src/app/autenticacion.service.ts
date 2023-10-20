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
  public autenticado!: boolean;

  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;

  }

  async login(username: string, password: string): Promise<boolean> {
    //Llamamos el arreglo desde el Storage
    const users: User[] = (await this.local.get('users')) || [];
    //obtenermos el valor del usuario que buscamos 
    const user = users.find((us: User) => us.username === username && us.password === password);
    //Si el usuario existe autentificamos y el metodo retorna true
    //caso contrario lanzamos false y no esta activo
    if (user) {
      this.autenticado = true;
      return true;
    }
    this.autenticado = false;
    return false;

  }

  logout() {
    this.autenticado = false;
    this.route.navigate(['/home']);
  }
}