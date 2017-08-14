import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['movies.component.scss'],
  providers : [ MoviesServiceService ]
})
export class MoviesComponent implements OnInit {


  private bilboards  : any [];
  private spaLink : string;
  private city : any;
  private soon : string;
  private active :any = false;

  constructor( private movieService : MoviesServiceService  ) { }

  ngOnInit() {

      this.city = "bogota"
      this.spaLink ='billboard';
      this.listmovies( this.city, this.spaLink );

  }

  onChange(deviceValue) {

    this.city = deviceValue;
    this.listmovies(this.city, this.spaLink);

  }

  cartelMovies( cartel :string)
  {
     console.log(cartel);
     this.spaLink = cartel;
     this.listmovies(this.city,this.spaLink);

  }

  listmovies(city, spalink : string)
  {
       this.movieService.getMovies(city)
         .subscribe( movies => {
           console.log(movies);
           if(spalink === 'billboard'){
             this.bilboards = movies.billboard;
             console.log(this.bilboards);
           }else{
             this.bilboards = movies.soon;
             console.log(this.bilboards);
           }

         })

  }




}
