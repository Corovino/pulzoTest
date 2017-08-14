import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';


import {  MoviesComponent  } from '../movies/movies/movies.component';

const routes : Routes =
  [
    { path : 'movies', component : MoviesComponent}

  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class ApproutingModule { }
