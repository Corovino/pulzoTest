import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesServiceService {

  private urlMovies = "http://static.pulzo.com/pulzo-dev/cinema/grid/";

  private  bgta : any  = "13421";
  private  bqlla : any  = "10986";

  constructor(private http : Http) { }




  getMovies(city : string)
  {
      console.log(city);
      if(city === "bogota")
      {
        let cityUrl = this.urlMovies+this.bgta+".json";
        return this.http.get(cityUrl)
          .map( resp => resp.json());
      }else {

        let urlCity = this.urlMovies + this.bqlla+".json";
        return  this.http.get(urlCity)
          .map( resp => resp.json());
      }
  }

}
