import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // injectons de tokenService pour avoir accès au token
  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Affichions la requête originale
    console.log(request)
    //Recupérons le token dans le tokenService
    const token = this.tokenService.getToken()

    // Vérifier si on a un token
    if(token !== null){
       // Vu qu'on ne peut pas modifier la requête principale, on doit le clonner d'abord
       let clone = request.clone({
          // Modifions les entêtes
          headers: request.headers.set('Authorization', "Bearer " +token)
       })
       // affichions voir
       console.log(clone)
       return next.handle(clone).pipe( // mécanisme de reponse
        catchError(error=> {
          console.log(error) // on affiche error
          
          this.tokenService.clearTokenExpired()
          return throwError('Votre session est Expiré !')
        })
       ) // ce clone contient notre entête
    }

    return next.handle(request); // Laisser la requêtte passer au Service
  }
}

// On Export interceptor provider
export const TokenInterceptorProvider = {
  provide :  HTTP_INTERCEPTORS, // on construit le provider
  useClass : TokenInterceptor, // le token qui a été générer
  multi : true // disposition partout on peut utiliser et l'intercepter
}
