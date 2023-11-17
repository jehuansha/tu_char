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
  }

  logout(){
    localStorage.removeItem('ingresado');
    this.router.navigate(['/home']); 
  }
}
