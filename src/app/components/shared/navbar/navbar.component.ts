import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  str:string= '';

  constructor(private router: Router,private ac:ActivatedRoute) { 

  }

  ngOnInit() {

    // this.ac.params.subscribe(param => console.log(param))
  }

  findMovie(query: string) {

    //const url = '/buscar' + query;

    console.log(this.str);

    this.router.navigate(['buscar',this.str]);

  }

}
