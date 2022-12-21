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

  // une méthode qui va ajouter une region, avec notre Models region en param
  // on va l'écouter avec un observeur
  addRegion(region: Region): Observable<any> {
    //appelons notre service http pour avoir accès au verbe http
    return this.http.post(`http://localhost:8080/region/create`, region);
  }
}
