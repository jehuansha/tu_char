import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  usuario: string = '';
  pass: string = '';


  constructor(private navCtrl: NavController) { }
  Ingresar() {
    this.navCtrl.navigateForward('/bienvenida', {
      queryParams: {
        value: this.usuario,
      },
    });
  }



}