import { Component, OnInit } from '@angular/core';
import { Region } from '../_models/region';
import { RegionService } from '../_services/region.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaysService } from '../_services/pays.service';

@Component({
  selector: 'app-ajouter-region',
  templateUrl: './ajouter-region.component.html',
  styleUrls: ['./ajouter-region.component.css']
})
export class AjouterRegionComponent implements OnInit {

  // créons une variable pour les pays
  Pays: any;
  

  // Injectons notre RegionService 
  // Injecton FormBuider pour bénéficier de son formGroup pour la validation du formulaire
  // Appelons payService pour bénéficier de la méthode qui affiche tous les pays
  constructor(private regionService: RegionService, private formB: FormBuilder, private paysService : PaysService) { }

  // Créons une variable pour notre image
  file: any;
  

  //Le Two way Binding, Binder cette variable avec celui qui se trouve dans notre balise form qui sera de type FormGroup
  formAddRegion!: FormGroup;

  // C'est-à-dire que par defaut le formulaire n'est pas valider
  submitted = false;

  // utiliser une interface de notre models
  ToAddRegion: Region = {

    codeRegion: '',

    nomRegion: '',

    activiteRegion: '',

    superficieRegion: '',

    langueParler: '',
  }


  ngOnInit(): void {
    // Notre Menu
    var nav = document.querySelector('nav'); // cette variable nav est Binder avec la balise nav de de menu

    window.addEventListener('scroll', function () {
      // Si la page supérieur à 100 on active le backgrond Noir
      if (window.pageYOffset > 100) {
        nav!.classList.add('bg-dark');
      }
      else {
        nav!.classList.remove('bg-dark')
      }
    }); // Fin Notre Menu


    // Lorsque le component est initialiser, on utilise notre formAddRegion pour avoir accèss aux Groupe de FormBuilder qui est dans le constructeur;
    this.formAddRegion = this.formB.group({
      // Déclarons les champs ou validations qu'on souhaite avoir
      // Le première validation est required
      // maintenant d'éclarons les variables qui seront binder avec le formulaire avec formControlName puis ngClass dans le html au niveau des input
      codeRegion: ["", Validators.required],
      nomRegion: ["", Validators.required],
      activiteRegion: ["", Validators.required],
      superficieRegion: ["", Validators.required],
      langueParler: ["", Validators.required],
      file: ["", Validators.required],
    })

    // Afficher tout les pays dans ngOnInit
    this.paysService.allCountry().subscribe(
      
      data=>{
        this.Pays = data;
        console.log('----- Tous les pays ---- ',this.Pays);
      },
      err => console.log(err)
    )
  }

  // Event for Image
  fileChang(event: any) {
    this.file = event.target.files[0]
    console.log('--------Event image--- ',event)
  }
  



  // Au click de validation du de la region,
  // Binding de la méthode qui se trouve dans le html au niveau du form
  getRegionData() {
    // changeons la variable de submitted à true;
    this.submitted = true

    // Vérions si les champs ne sont invalid
    if (this.formAddRegion.invalid) {
      return
    }
    else {
      // sinon si tous les champs sont remplis,
      alert("Région Ajouter avec Succès !")

      // Assigner les valeurs recupérer dans le formulaire à notre méthode ToAddRegion
      this.ToAddRegion = this.formAddRegion.value

      // Appélons notre region service pour bénéficier de la méthode addRegion qui contient l'URL
      this.regionService.addRegion(this.ToAddRegion, this.file).subscribe(
        // Cette méthode prend deux méthode
        // La prémière si tout va bien
        data => {
          this.ToAddRegion = data,
            console.log('----------- Région Ajouter --------- ', data)
        },
        // Et si ya erreur, on affiche Erreur
        err => console.log(err)
      )

    }
  }


}
