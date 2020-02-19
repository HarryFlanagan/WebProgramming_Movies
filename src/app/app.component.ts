import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
movies=[];

constructor(private movieService: MovieService) {}

  ngOnInit(){
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
  public mySelectedMovie:Movie;

  setSelectedMovie(movie:Movie){
    this.mySelectedMovie = movie;
  }
}

