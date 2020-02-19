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
  constructor(private movieService: MovieService) { this.onSelectedMovie=new EventEmitter()
   }
  private currentMovie:Movie;

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  @Output() onSelectedMovie: EventEmitter<Movie>;

  movieSelected(movie:Movie):void{
    console.log ('movie selected was ', movie);
  }
  selectMovie(myMovie:Movie):void{
    console.log(myMovie);
    this.currentMovie=myMovie;
    this.onSelectedMovie.emit(myMovie);
  }
   isSelected(movie:Movie): boolean{
     if (!movie || !this.currentMovie){
       return false
     }
     return movie.title === this.currentMovie.title;
   }
  

}
