import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  // Créons une variable qui va prendre une Array des Regions
  regionList: any

  // une variable pour la pagination
  p : number = 1;

 // Injectons le service HttpClient pour avoir accès au verbe http;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    // Pour le Menu
    var nav = document.querySelector('nav'); // cette variable nav est Binder avec la balise nav de de menu

    window.addEventListener('scroll', function(){
      // Si la page supérieur à 100 on active le backgrond Noir
      if(window.pageYOffset > 100){ 
        nav!.classList.add('bg-dark');
      }
      else{
        nav!.classList.remove('bg-dark')
      }
    }); // Fin MENU
    

    
     // Lister les Regions;
     this.http.get('http://localhost:8080/region/read').subscribe(
      // La prémière méthode si ça marche
      (regions) => {
        console.log('------------- Liste Region -------', regions)
        this.regionList = regions
      })



  }

}
