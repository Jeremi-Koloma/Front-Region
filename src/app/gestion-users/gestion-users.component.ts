import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  // Injectons le service HttpClient pour recupérer les uers
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/RegionUsers/users').subscribe(
      // La première méthode si tout va bien
      data => console.log(data)
    )
  }

}
