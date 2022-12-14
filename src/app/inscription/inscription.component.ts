import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  submitted = false; // Par défaut le formulaire n'est pas validé;

  inscriptionValidation!: FormGroup // Binding de inscriptionValidation à célui qui se trouve dans le HTML

  // on crée une variable formlBuilder qui sera de type FormBuilder de Angular en mettans les imports à jours, pour le traitement du formulaire. 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Validation, on prend notre variable déclarer pour avoir accès aux formGroupe de FormBuilder qui est dans le constructeur;
    this.inscriptionValidation = this.formBuilder.group({
      // Déclarons les validations qu'on souhaite avoir.
      // On importe Validators ou mètre à jours les imports, 1ère validation c'est required
      // Quand l'utilisateur ne mets rien, un message s'affichera que userName est obigatoire.
      // le userName est à Binder au niveau de input dans le formulaire dans formControlName="userName" avec {ngClass}
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  // Quand ton clic sur le boutton S'inscrire
  onSubmit() {
    // Maintenant change la valeur de submitted à true;
    this.submitted = true;

    // vérifions les champs sont invalide
    if (this.inscriptionValidation.invalid) {
      return
    } else {
      alert("Inscrit avec Succèss !")
    }

  }

}
