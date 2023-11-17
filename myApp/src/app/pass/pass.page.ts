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

  logout(){
    localStorage.removeItem('ingresado');
    this.router.navigate(['/home']); 
  }
  
}



