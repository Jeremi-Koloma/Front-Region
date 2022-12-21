import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICredential } from '../_interfaces/credential'; // Importation de l'interface Icredential
import { AuthService } from '../_services/auth.service'; // Importantion du service Authentification 
import { TokenService } from '../_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Two way Binding | Récupération des valeurs dans le formulaire;
  // Le form sera de type Icredentials notre interface.
  form : ICredential = {
    username : '',
    password : ''
  }

  // Déclarons une variable de même nom que celui qui se trouve dans le formulaire html pour les Binder
  loginForm !: FormGroup;
  submitted = false // C'est-à-dire que par defaut le formulaire n'est pas valider

  // Dans le constructeur, importons FormBuilder de Angular pour le traitement du formulaire
  // Injectons notre Service d'Authentification dans le constructeur
  //Injectons le service Token dans le constructeur
  constructor(private formBuilder: FormBuilder, private authService : AuthService, private tokenService : TokenService ) { }

  ngOnInit(): void {
    // Lorsque le component est initialiser, on utilise notre loginForm pour avoir accèss aux Groupe de FormBuilder qui est dans le constructeur;
    this.loginForm = this.formBuilder.group({
      // Déclarons les validations qu'on souhaite avoir
      // au Cas y'a rouge n'oublie pas d'imoprter Validators dans les imports
      // maintenant d'éclarons les variables qui seront binder avec le formulaire avec formControlName puis ngClass
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  // maintent créons une méthode pour le clic du bouttons validation
  onSubmit(){ // le nom de cette méthode est dans le html
    // changeons la variable de submitted à true;
    this.submitted = true

    // Vérions si les champs ne sont invalid
    if (this.loginForm.invalid) {
      return
    }
    else {
      alert("Connecter avec succès !")
      // Affichage des identifiants de user
      console.log(this.form)
      // Appelons notre login dans le service
      this.authService.login(this.form).subscribe(
        // cette méthode a deux méthodes,

        // La prémière méthode si tout va bien
        data => {
          console.log(data.access_Token),
          // Pour savegarder notre token dans le navigateur, on appel la méthode saveToken du serviceToken et on l'envoie note access_Token
          this.tokenService.saveToken(data.access_Token)
        },
        // Deuxième méthode si ya Erreur
        err => console.log(err)
      )
    }

  }

}
