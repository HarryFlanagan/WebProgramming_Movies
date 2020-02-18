import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { MovieService} from '../movie.service';
import { Movie } from '../movie.model'


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
movies=[];
  constructor(private movieService: MovieService) { }
  private currentMovie:Movie;

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  @Output() onSelectedMovie: EventEmitter<Movie>;

  movieSelected(movie:Movie):void{
    console.log ('movie selected was ', movie);
  }
  

}
