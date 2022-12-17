import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-region',
  templateUrl: './ajouter-region.component.html',
  styleUrls: ['./ajouter-region.component.css']
})
export class AjouterRegionComponent implements OnInit {

  constructor() { }

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

}
