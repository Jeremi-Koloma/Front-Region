import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  // Dans le constructeur déclarons une variable pour importer Router de Angular pour la redirection;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // Redirection vers la page d'Accueil
  goToHomePage(){
    // Appelons notre route pour avoir accès à la propriété Navigate de Router;
    this.router.navigate(['/accueil']);
  }
}
