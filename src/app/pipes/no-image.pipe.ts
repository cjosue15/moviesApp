import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(pelicula: any): any {


    let url = 'https://image.tmdb.org/t/p/w500';

    // if(pelicula.backdrop_path){
    //   return url + pelicula.backdrop_path;
    // } else if(pelicula.poster_path) {
    //   return url + pelicula.poster_path;
    // }
    // if(pelicula === null){
    //   console.log('Esta nullo');

    // }

    if (pelicula) {
      if (typeof pelicula === 'object') {
        if (pelicula.backdrop_path) {
          return url + pelicula.backdrop_path;
        } else if (pelicula.poster_path) {
          return url + pelicula.poster_path;
        }
      }

      if (typeof pelicula === 'string') {
        return url + pelicula;
      }

    }

    return 'assets/img/no-image.png';
  }

}
