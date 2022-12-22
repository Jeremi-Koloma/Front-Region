import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  // Injectons httpCLient pour bénéficier des aux verbes http
  constructor(private http : HttpClient) { }

  // Créons une méthode qui va afficher tous les pays
  allCountry(): Observable<any>{
    // Appélons notre http pour bénéficier aux verbe http
    return this.http.get(`http://localhost:8080/pays/read`);
  }
}
