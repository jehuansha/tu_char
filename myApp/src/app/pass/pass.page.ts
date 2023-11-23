import { Component, OnInit } from '@angular/core';
import { DjangoapiService } from '../conexion/djangoapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {

  viaje: any[] = [];
  usuarios: any;

  constructor(private djangoApi: DjangoapiService, private router: Router) { }

  ngOnInit(){
    this.cargaViaje()
  }

   cargaViaje(){
     this.djangoApi.getViaje().subscribe(
       (res)=>{
        console.log(res);
         this.viaje = res;
      }
      ,
      (error)=>{
         console.log(error);
      }
    )
  }

  correoql(){
    this.djangoApi.getUser().subscribe(
      (res)=>{
       console.log(res);
        this.usuarios = res;
     }
     ,
     (error)=>{
        console.log(error);
     }
   )
 }

  async seleccionarViajeYEnviarCorreo(item: any) {
    try {
      // Obtener el nombre de correo del dueño del viaje (de tu API Django)
      // const nombreDeCorreo = await this.djangoApi.getUser(usuarios.correo).toPromise();
      

      // Construir el cuerpo del correo con los datos del viaje
      const cuerpo = `
        PATENTE: ${item.patente}
        HORA: ${item.hora} hrs
        COSTO: $${item.costo}
        PASAJEROS: ${item.capacidad} Pasajeros
        DESTINO: ${item.destino}
        DUEÑO: ${item.duenno}
        `;

      // Construir el enlace mailto
      const enlaceMailto = `mailto:${item.correo}?subject=Seleccionar Viaje&body=${encodeURIComponent(cuerpo)}`;
      window.location.href = enlaceMailto;
    } catch (error) {
      console.error('Error al obtener el nombre de correo', error);
    }
  }

  logout(){
    localStorage.removeItem('ingresado');
    this.router.navigate(['/home']); 
  }
  
}



