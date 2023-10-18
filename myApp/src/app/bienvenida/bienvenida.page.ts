import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DjangoapiService } from '../conexion/djangoapi.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  state:any;
  user:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router , private authGuard: AuthGuard,
    private djangoApi: DjangoapiService){
    this.activatedRoute.queryParams.subscribe(params => {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.user=this.state.user
      console.log(this.user);
    })
    this.djangoApi.getUser().subscribe(
      (user)=>{
        console.log(user);
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
    
    this.djangoApi.getViaje().subscribe(
      (viaje)=>{
        console.log(viaje);
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
  }
}
