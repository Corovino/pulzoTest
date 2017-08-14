import { Component, OnInit, Input } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['movies-filter.component.scss']
})
export class MoviesFilterComponent implements OnInit {

  @Input() bilboards : string;
  //@Input() movieType :string;

  constructor(private movieService : MoviesServiceService) { }

  ngOnInit() {




  }

}
