import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueillComponent } from './accueill/accueill.component';
import { AdminComponent } from './admin/admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegionComponent } from './region/region.component';

// Gestion des Routes
const routes: Routes = [
  {path: 'inscription',component: InscriptionComponent},
  {path: 'login',component: LoginComponent},
  {path: 'accueil',component: AccueillComponent},
  {path: 'regions',component: RegionComponent},
  {path: 'admin',component: AdminComponent},
  {path: '',redirectTo: 'accueil', pathMatch:'full'}, // Route par défaut;
  {path: '**',component: PageNotFoundComponent} // Notre page d'Erreur. Tout chémin non défini sera 404
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
