import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  state:any;
  user:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.queryParams.subscribe(params => {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.user=this.state.user
      console.log(this.user);
    })
  }
}
