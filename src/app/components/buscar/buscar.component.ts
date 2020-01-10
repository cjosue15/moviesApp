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
  total_pages:any[] = [];
  page:string = '1';
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
      this._ps.searchMovie(this.str,this.page).subscribe(data => {
        this.total_pages = [];
        for (let i = 1; i <= data.total_pages; i++) {
          this.total_pages.push(i);         
        }
        // console.log(this.total_pages);
        // this.total_pages = this.total_pages;
        this.movies = data.results;
      });

    }

  }

  pageSearch(page:string) {
    this.page = page;
    // console.log(page);
    this.total_pages = [];
    this._ps.searchMovie(this.str,this.page).subscribe(data => {
      for (let i = 1; i <= data.total_pages; i++) {
        this.total_pages.push(i);         
      }
      this.movies = data.results;
    });

  }

}
