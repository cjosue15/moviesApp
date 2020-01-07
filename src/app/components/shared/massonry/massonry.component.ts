import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-massonry',
  templateUrl: './massonry.component.html',
  styleUrls: ['./massonry.component.css']
})
export class MassonryComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('title') title;

  constructor() {
  }

  ngOnInit() {
    console.log(this.peliculas);

  }

}
