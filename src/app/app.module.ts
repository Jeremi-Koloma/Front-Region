import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { AccueillComponent } from './accueill/accueill.component';
import { RegionComponent } from './region/region.component';
import { AdminComponent } from './admin/admin.component';
import { GestionRegionsComponent } from './gestion-regions/gestion-regions.component';
import { DetailsRegionComponent } from './details-region/details-region.component';
import { AjouterRegionComponent } from './ajouter-region/ajouter-region.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaysComponent } from './pays/pays.component';




@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    AccueillComponent,
    RegionComponent,
    AdminComponent,
    GestionRegionsComponent,
    DetailsRegionComponent,
    AjouterRegionComponent,
    PageNotFoundComponent,
    GestionUsersComponent,
    PaysComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Pour Activer ReactiveFormsModule après l'importation
    AppRoutingModule, // le routage
    HttpClientModule, // Pour les Requêtes Http
    FormsModule, // pour les ngForm
    Ng2SearchPipeModule, // Pour la recheche
    NgxPaginationModule // Pour la pagination
  ],
  providers: [TokenInterceptorProvider], // notre intercepteur des requêtte
  bootstrap: [AppComponent]
})
export class AppModule { }
