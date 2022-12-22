import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-region',
  templateUrl: './details-region.component.html',
  styleUrls: ['./details-region.component.css']
})
export class DetailsRegionComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    // Debut Menu
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

  }

}
