import { Component, OnInit } from '@angular/core';
import { Region } from '../_models/region';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-ajouter-region',
  templateUrl: './ajouter-region.component.html',
  styleUrls: ['./ajouter-region.component.css']
})
export class AjouterRegionComponent implements OnInit {


  constructor(private regionService : RegionService) { }

  // utiliser une interface de notre models
  ToAddRegion:Region = {

    codeRegion: '',
    
    nomRegion: '',

    activiteRegion :'',

    superficieRegion :'',
    
    langueParler :''
  }


  ngOnInit(): void {
    // Notre Menu
    var nav = document.querySelector('nav'); // cette variable nav est Binder avec la balise nav de de menu

    window.addEventListener('scroll', function(){
      // Si la page supérieur à 100 on active le backgrond Noir
      if(window.pageYOffset > 100){ 
        nav!.classList.add('bg-dark');
      }
      else{
        nav!.classList.remove('bg-dark')
      }
    }); // Fin Notre Menu
  }

  // Binding de la méthode qui se trouve dans le html au niveau du form
  getRegionData(data:Region){
    // Appélons notre region service pour bénéficier de la méthode addRegion
    this.regionService.addRegion(data).subscribe(
      // Cette méthode prend deux méthode
      // La prémière si tout va bien
      data =>{
        this.ToAddRegion = data,
        console.log('----------- Régon Ajouter --------- ',data)
      },
      // Et si ya erreur, on affiche Erreur
      err => console.log(err)
    )
  }


}
