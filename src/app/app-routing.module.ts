import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueillComponent } from './accueill/accueill.component';
import { AdminComponent } from './admin/admin.component';
import { AjouterRegionComponent } from './ajouter-region/ajouter-region.component';
import { DetailsRegionComponent } from './details-region/details-region.component';
import { GestionRegionsComponent } from './gestion-regions/gestion-regions.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegionComponent } from './region/region.component';
import { AuthGuard } from './_helpers/auth.guard';

// Gestion des Routes
const routes: Routes = [
  {path: 'inscription',component: InscriptionComponent},
  {path: 'login',component: LoginComponent},
  {path: 'regions',component: RegionComponent}, // page des Régions
  {path: 'add-region',component: AjouterRegionComponent}, // Ajouter une Région
  {path: 'details-region',component: DetailsRegionComponent}, // page détails d'une Région
  {path: 'gestion-users',component: GestionUsersComponent}, // Page gestion des Users
  {path: 'accueil',component: AccueillComponent},
  {path: 'admin',component: AdminComponent, canActivate :[AuthGuard]}, // le gardien // Dashboard Admin
  {path: '',redirectTo: 'accueil', pathMatch:'full'}, // Route par défaut;
  {path: '**',component: PageNotFoundComponent} // Notre page d'Erreur. Tout chémin non défini sera 404
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
