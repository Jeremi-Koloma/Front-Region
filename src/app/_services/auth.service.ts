import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential } from '../_interfaces/credential';
import { IToken } from '../_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Créons une url de base
  Url = 'http://localhost:8080/login'

  // Injectons le Service HttpClient de Angular pour avoir accès au verbe http
  constructor(private http : HttpClient) { }


  // Créeons une méthode login qui va prendre les identifiants de user en param qui seront de type Icredential qui va retourner un observable de type IToken
  login(credentials : ICredential):Observable<IToken>{
    // Appélons notre url qui va faire un post et nous retourner un token 
   return this.http.post<IToken>(this.Url, credentials)
  }

}
