import { Injectable } from '@angular/core';
import { Movie } from "./movie.model";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor() {}
  moviesList = [
    new Movie('The GodFather','1972', 'Francis Ford Coppola'),
    new Movie('City of God','2002','Fernando Meirelles'),
    new Movie('In Bruges','2008','Martin McDonagh'),
    new Movie('The Lord of the Rings: The Return of the King','2003','Peter Jackson')
  ];

  getMovies() {
    return this.moviesList;
  }
  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.moviesList.push(new Movie(movietitle, moviedirector, movieyear));
  }
  
}
