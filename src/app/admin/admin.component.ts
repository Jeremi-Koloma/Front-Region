import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../_services/token.service'; // importation du TokenService

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // Injectons le Service token pour bénéficier de la méthode deconnexion
  // Injectons le serve Router pour faire la redirection vers la liste des users
  constructor(private tokenService : TokenService, private router : Router) { }

  ngOnInit(): void {
    var nav = document.querySelector('nav'); // cette variable nav est Binder avec la balise nav de de menu

    window.addEventListener('scroll', function(){
      // Si la page supérieur à 100 on active le backgrond Noir
      if(window.pageYOffset > 100){ 
        nav!.classList.add('bg-dark');
      }
      else{
        nav!.classList.remove('bg-dark')
      }
    });

    
  }

  // méthode déconnexion
  logout() : void{
    // On appel le tokenService pour bénéficier de la méthode déconnexion
    this.tokenService.clearToken() // Suppression du token
  }

  // une méthode pour aller à la page gestion des users
  allUser(){
    this.router.navigate(['gestion-users'])
  }

}
