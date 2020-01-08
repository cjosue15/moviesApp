import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  movies: any[];
  fila: any;

  constructor(private _ps: PeliculasService) { }

  ngOnInit() {
    // this.fila = document.querySelector('#rowSearch');
  }

  findMovie(query: string) {

    if (query.length > 0) {

      this._ps.searchMovie(query).subscribe(data => {
        this.movies = [];
        this.movies = data.results;
        // console.log(this.movies);
      });

    }

  }

}
