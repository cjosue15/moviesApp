import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  id:string;
  movie:any;
  video:any;

  constructor(private _ps:PeliculasService,private router:ActivatedRoute) {

    this.id = (this.router.snapshot.params['id']).toString();
    this._ps.getMovie(this.id).subscribe(data => {
        this.movie = data;
        console.log(this.movie);
    })

    this._ps.getVideoOfMovie(this.id).subscribe(data => {
        this.video = data;
        console.log(this.video);
    })
    
   }

  ngOnInit() {
  }

}
