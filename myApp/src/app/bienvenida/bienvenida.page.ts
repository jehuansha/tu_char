import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DjangoapiService } from '../conexion/djangoapi.service';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  viajeData: any = {
    patente: "",
    hora: "",
    costo: "",
    capacidad: "",
    destino: "",
    duenno: ""
  }

  state: any;
  credentials: any;
  viajes: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router , private auth: AutenticacionService,
    private djangoApi: DjangoapiService){
      this.activatedRoute.queryParams.subscribe(params => {
        this.state = this.router.getCurrentNavigation()?.extras.state;
        this.credentials = this.state.credentials
        console.log(this.credentials);
      });
  }

  register() {
    this.djangoApi.crearviaje(this.viajeData).subscribe(
      (response) => {
        // Manejar la respuesta exitosa (redireccionar, mostrar mensaje, etc.)
        console.log('Registro exitoso:', response);
      },
      (error) => {
        // Manejar el error (mostrar un mensaje de error, etc.)
        console.error('Error en el registro:', error);
      }
    );
  }

  logout(){
    localStorage.removeItem('ingresado');
    this.router.navigate(['/home']); 
  }
}

    // this.djangoApi.getUser().subscribe(
    //   (user)=>{
    //     console.log(user);
    //   }
    //   ,
    //   (error)=>{
    //     console.log(error);
    //   }
    // )
    
    // this.djangoApi.getViaje().subscribe(
    //   (viaje)=>{
    //     console.log(viaje);
    //   }
    //   ,
    //   (error)=>{
    //     console.log(error);
    //   }
    // );