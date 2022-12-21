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

  // Notre models
  ToAddRegion:Region = {

    codeRegion: '',
    
    nomRegion: '',

    activiteRegion :'',

    superficieRegion :'',
    
    langueParler :''
  }

  codeRegion :string= '';
  
  nomRegion :string= '';

  activiteRegion :string= '';

  superficieRegion :string= '';
  
  langueParler :string= '';

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

  getRegionData(data:any){
    console.log(data)
    //
    this.regionService.addRegion(data).subscribe(
      data =>{
        this.ToAddRegion = data
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',data)
      }
    )
  }


}
