import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  movies: any[];
  str: string;
  caja: any;
  total_pages: number = 0;
  page: number;
  previousPage: number;
  showPagination: boolean = false;
  // search:string = "";

  constructor(
    private _ps: PeliculasService,
    private activatedR: ActivatedRoute,
    private configPag: NgbPaginationConfig
  ) {
    this.configPag.pageSize = 20;
  }

  ngOnInit() {
    this.previousPage = 1;
    this.activatedR.params.subscribe((parametro: any) => {
      if (parametro.query) {
        this.page = 1;
        this.str = parametro.query;
        this.findMovie(this.page);
      }
    });
    this.caja = document.getElementById('searchN');
  }

  resetForm() {
    console.log(this.caja.value);
    this.caja.value = this.str;
  }

  findMovie(page: number) {
    // this.page = 1;
    if (this.str.length > 0) {
      this._ps.searchMovie(this.str, this.page).subscribe(data => {
        // this.total_pages = 0;
        // for (let i = 1; i <= data.total_pages; i++) {
        //   this.total_pages.push(i);
        // }

        this.total_pages = data.total_results;
        // console.log(data);

        // console.log(this.total_pages);
        this.movies = data.results;
        this.showPagination = true;
      });
    }
  }

  pageSearch(page: number) {
    this.page = page;
    // this.total_pages = 0;
    this.findMovie(this.page);
  }


  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.findMovie(this.page - 1);
    }
  }

}
