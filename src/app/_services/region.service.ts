import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../_models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  // Injectons le service HttpClient du Angular pour avoir accès au verbe http
  constructor(private http: HttpClient) { }

  // une méthode qui va ajouter une region, avec notre Models region en param plus l'image
  // on va l'écouter avec un observeur
  addRegion(region: Region, file:any): Observable<any> {

    // Les données que nous allons recevoir dans @param
    const data:FormData=new FormData();

    // Les @param on les lie à notre classe
    data.append("file", file);
    data.append("codeRegion", region.codeRegion);
    data.append("nomRegion", region.nomRegion);
    data.append("activiteRegion", region.activiteRegion);
    data.append("superficieRegion", region.superficieRegion);
    data.append("langueParler", region.langueParler);

    //appelons notre service http pour avoir accès au verbe http
    return this.http.post(`http://localhost:8080/region/createAvecImage/${1}`, data);
  }
}
