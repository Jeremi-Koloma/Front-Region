import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Déclarons une variable de même nom que celui qui se trouve dans le formulaire html pour les Binder
  loginForm !: FormGroup;
  submitted = false // C'est-à-dire que par defaut le formulaire n'est pas valider

  // Dans le constructeur, importons FormBuilder de Angular pour le traitement du formulaire
  constructor(private formBuilder: FormBuilder) { }

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
  onSubmit() { // le nom de cette méthode est dans le html
    // changeons la variable de submitted à true;
    this.submitted = true

    // Vérions si les champs ne sont invalid
    if (this.loginForm.invalid) {
      return
    }
    else {
      alert("Connecter avec succès !")
    }

  }

}
