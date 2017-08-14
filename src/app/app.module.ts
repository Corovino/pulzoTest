import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ApproutingModule } from './approuting/approuting.module';
import { MoviesComponent } from './movies/movies/movies.component';
import { FilterPipe } from './shared/filter.pipe';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FilterPipe,
    MoviesFilterComponent
  ],
  imports: [
    ApproutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
