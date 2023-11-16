import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { DjangoapiService } from '../conexion/djangoapi.service';
import { Storage } from '@ionic/storage';
import { AutenticacionService } from '../autenticacion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  hide = true;


  username: string = '';
  password: string = '';

  authBool:boolean= false; 

  @ViewChild(IonAvatar,{read:ElementRef}) avatar!:ElementRef<HTMLIonAvatarElement>;

  
  segment: string = 'login';

  nuevoUser: any = {
    username: '',
    password: '',
    nombre:'',
    correo:''
  }

  private animation!:Animation;
  constructor(private router: Router,private animationCtrl:AnimationController,private djangoApi: DjangoapiService , private storage:Storage ,private auth: AutenticacionService) { 
    var obj = {
          name:"pepe23",
          age:24
        }
        storage.set('obj', obj);
        storage.get('obj').then((val) => {
        console.log(val);
        console.log(val.name)
        });
      
  }
  public mensaje = "";

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
  
  user = {
    username: "",
    password: ""
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

  async login() {
    try {
      const res = await this.djangoApi.login(this.username, this.password).toPromise();
  
      if (typeof res === 'boolean') {
        if (res) {
          console.log(res);
          let navigationExtras: NavigationExtras = {
            state: { username: this.username }
          };
          this.authBool = true;
          this.auth.Autenticacion(this.authBool);
          this.router.navigate(['/bienvenida'], navigationExtras);
          console.log('Inicio de sesion exitoso');
        } else {
          console.log(res);
          this.authBool = false;
          this.auth.Autenticacion(this.authBool);
          console.error('Inicio de sesión fallido');
        }
      } else {
        console.error('Respuesta inesperada del servidor');
      }
    } catch (error) {
      this.authBool = false;
      this.auth.Autenticacion(this.authBool);
      console.error('Error al iniciar sesión', error);
    }
  }
    enviarInformacion() {
      this.login();
    }

}


