import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  hide = true;

  user = {
    username: "",
    password: ""
  }


  constructor(private router: Router) { }
  
  Ingresar() {
    let navegationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
      this.router.navigate(['/bienvenida'], navegationExtras)
 
  }



}