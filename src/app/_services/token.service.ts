import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // importation du Router

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // injectons le service Router de Angular pour la redirection après l'authentification.
  constructor(private router : Router) { }

  // Créons une méthode de savegarder le token dans le navigateur
  saveToken(token : string):void {
    // Savegarder le token dans le localStorage du Navigateur pour chaque requête
    localStorage.setItem('token', token)
    // Une fois qu'il a savegarder le token, on redirige vers la page selon ses rôles
    this.router.navigate(['admin'])
  }

  // Une méthode si la connexion a réussi
  isLogged():boolean{
     // on stock le token recupérer de localStorage
     const token = localStorage.getItem('token')
     console.log(token)
     return !! token; // !! tranforme la variable token en boolean si le token n'existe pas, ça sera null ou false ne boolean
  }

  // une méthode pour déconnexion 
  clearToken():void{
    localStorage.removeItem('token') // on déruit le token dans localStorage
    this.router.navigate(['/']) // on retourne à la racine
  }

}
