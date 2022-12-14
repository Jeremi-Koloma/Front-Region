import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueill',
  templateUrl: './accueill.component.html',
  styleUrls: ['./accueill.component.css']
})
export class AccueillComponent implements OnInit {

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
