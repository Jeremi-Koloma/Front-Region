import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueillComponent } from './accueill/accueill.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  {path: "",component: AccueillComponent},
  {path: "inscription",component: InscriptionComponent},
  {path: "login",component: LoginComponent},
  {path: "accueil",component: AccueillComponent},
  {path: "regions",component: RegionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
