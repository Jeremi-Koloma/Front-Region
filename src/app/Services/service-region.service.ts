import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceRegionService {
  // Url de base dans l'Environnement;
  baseUrl = environment;
  // Importons HttpClient dans le constructeur;
  constructor(private http : HttpClient) { }

  // Une méthode 
  public getAllRegion():Observable<any> {
    console.log("###########################::: " + `${this.baseUrl}region/read`)
    return this.http.get(`http://localhost:8080/region/read`);
  }
}
