import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Two way Binding | Récupération des valeurs dans le formulaire;
  form :any = {
    username : null,
    password : null
  }

  // Déclarons une variable de même nom que celui qui se trouve dans le formulaire html pour les Binder
  loginForm !: FormGroup;
  submitted = false // C'est-à-dire que par defaut le formulaire n'est pas valider

  // Dans le constructeur, importons FormBuilder de Angular pour le traitement du formulaire
  // injectons HttpClient pour notre requête postLogin
  constructor(private formBuilder: FormBuilder, private http : HttpClient) { }

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
      console.log(this.form);
      this.http.post('http://localhost:8080/login',this.form).subscribe(
        // cette méthode a deux méthodes,

        // La prémière méthode si tout va bien
        data => console.log(data),
        // Deuxième méthode si ya Erreur
        err => console.log(err)
      )
    }

  }

}
