import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Injectons le service Router pour la redirection vers la page login si le user n'est pas authentifier
  constructor(private router : Router, private tokenService : TokenService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // vérifier s'il s'est s'authentifier pour avoir le token admin avant d'acceder à la page admin
      if(this.tokenService.isLogged()){
        return true;
      }

    // Sinon on le renvoie le formulaire d'authentification.
    return this.router.navigate(['login']);
  }
  
}
