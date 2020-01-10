import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = '1bd01a2b8cdcbdf3eaa4aa5f1cd788fc';
  private urlMovieDB: string = 'https://api.themoviedb.org/3';
  movies: any[] = [];
  video: any[] = [];
  constructor(private http: HttpClient) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7); //1 semana

    let desdeSTR = `${desde.getFullYear()}-${(desde.getMonth() + 1).toString().padStart(2, '0')}-${(desde.getDate().toString().padStart(2, '0'))}`;

    let hastaSTR = `${hasta.getFullYear()}-${(hasta.getMonth() + 1).toString().padStart(2, '0')}-${hasta.getDate()}`;

    let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=${desdeSTR}&primary_release_date.lte=${hastaSTR}&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(
      map((data: any) => {
        return this.movies = data.results;
      })
    );

  }

  getPopulares() {

    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    //let url = `${this.urlMovieDB}/movie/now_playing?&api_key=${this.apikey}&language=es&page=1`;

    return this.http.get(url).pipe(
      map((data: any) => {
        return this.movies = data.results;
      })
    );
  }

  getPopularesKi() {
    let url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    //let url = `${this.urlMovieDB}/movie/now_playing?&api_key=${this.apikey}&language=es&page=1`;

    return this.http.get(url).pipe(
      map((data: any) => {
        return this.movies = data.results;
      })
    );
  }

  searchMovie(query: string,page:string) {

    let url = `${this.urlMovieDB}/search/movie?api_key=${this.apikey}&language=es&query=${query}&page=${page}`;

    return this.http.get(url).pipe(
      map((data: any) => {
        this.movies = data.results.sort((a, b) => b.popularity - a.popularity);
        return {
          ...data,
          results: this.movies
        }
        // console.log(this.movies)
      }));
  }

  getMovie(id: string) {
    let url = `${this.urlMovieDB}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }

  getVideoOfMovie(id: string) {
    let url = `${this.urlMovieDB}/movie/${id}/videos?api_key=${this.apikey}&language=en-US`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return this.video = data.results;
      })
    );
  }

}
