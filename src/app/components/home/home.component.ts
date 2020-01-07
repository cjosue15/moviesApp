import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  query:string='Star Wars';
  cartelera:any[];
  populares:any[];
  popularesKid:any[];

  constructor(private _ps:PeliculasService){

    this._ps.getCartelera()
    .subscribe(data => {
      this.cartelera = data;
    });

    this._ps.getPopulares()
    .subscribe(data => {
      this.populares = data;
    });

    this._ps.getPopularesKi()
    .subscribe(data => {
      this.popularesKid = data;
      console.log(this.popularesKid);
    });

    this._ps.searchMovie(this.query)
      .subscribe(data => console.log(data));      

  }

}
