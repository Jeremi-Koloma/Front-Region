import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRegionService } from '../Services/service-region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  // une varible pour lister les regions
  allRegion : any;

  // Injections des dépendance, injectons le servce dans le constructeur
  constructor(private serviceRegion : ServiceRegionService) { }

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

    // On appel la méthode getAllRegion  du Service 
   this.serviceRegion.getAllRegion().subscribe(data =>{
    this.allRegion = data;
    console.log("---------------------------",this.allRegion)

   })
    


  }

}
