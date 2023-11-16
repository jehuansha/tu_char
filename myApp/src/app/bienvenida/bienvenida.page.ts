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

  state:any;
  user:any;


  username: string = '';

  authBool:boolean=false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router , private auth: AutenticacionService,
    private djangoApi: DjangoapiService){
      const state=this.router.getCurrentNavigation()?.extras.state
      if(state){
        this.username=state['username']
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
  }

  logout(){
    this.auth.Autenticacion(this.authBool);
   this.router.navigate(['/login']) 
  }
}
