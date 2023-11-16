import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AutenticacionService) { }
  canActivate(): boolean {
    if(this.auth.returnVal()){
      return true;
    }else{
      this.router.navigate(['/home'])
      return false;
    }
  }

}
