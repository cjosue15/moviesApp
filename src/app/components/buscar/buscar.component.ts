import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  movies: any[];
  str:string;
  caja:any;
  //search:string = "";

  constructor(private _ps: PeliculasService,private activatedR:ActivatedRoute) { }

  ngOnInit() {
    this.activatedR.params.subscribe((parametro:any)=>{
      // this.str = data.params.query
      if(parametro['query']){
        this.str = parametro['query'];
        this.findMovie();
      }
    });


    this.caja = document.getElementById('searchN');

  }

  resetForm(){
    console.log(this.caja.value);
    this.caja.value = this.str;

    
  }

  findMovie() {

    if (this.str.length > 0) {
      this._ps.searchMovie(this.str).subscribe(data => {
        // this.movies = [];
        this.movies = data.results;
        // console.log(this.movies);
      });

    }

  }

}
