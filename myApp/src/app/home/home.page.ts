import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { DjangoapiService } from '../conexion/djangoapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  hide = true;

  @ViewChild(IonAvatar,{read:ElementRef}) avatar!:ElementRef<HTMLIonAvatarElement>;

  user = {
    username: "",
    password: ""
  }
  segment: string = 'login';

  nuevoUser: any = {
    user: '',
    password: '',
    nombre:'',
    correo:''
  }

  private animation!:Animation;
  constructor(private router: Router,private animationCtrl:AnimationController,private djangoApi: DjangoapiService) { }

  ngAfterViewInit() {
    this.animation = this.animationCtrl.create()
      .addElement(this.avatar.nativeElement)
      .duration(5000)
      .iterations(Infinity)
      .keyframes([
        {offset:0, transform:'translateX(0px)',opacity:'1'},
        {offset:0.25, transform:'translateX(100px)',opacity:'0.2'},
        {offset:0.50, transform:'translateX(0px)',opacity:'1'},
        {offset:0.75, transform:'translateX(-100px)',opacity:'0.2'},
        {offset:1, transform:'translateX(0px)',opacity:'1'},
      ])
    this.animation.play();
  }


  
  Ingresar() {
    let navegationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
      this.router.navigate(['/bienvenida'], navegationExtras)
 
  }

  crearNuevoUsuario() {
    this.djangoApi.crearUsuario(this.nuevoUser).subscribe(
      (response) => {
        console.log('Usuario creado:', response);
        
      },
      (error) => {
        console.error('Error al crear usuario:', error);
      }
    );
  }

}


