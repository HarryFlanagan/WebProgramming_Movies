import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {}
  moviesList = [
    {title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola'},
    {title: 'City of God', year: '2002', director: 'Fernando Meirelles'},
    {title: 'The Lord of the Rings: The Return of the King', year: '2003', director: 'Peter Jackson'},
  ];

  getMovies() {
    return this.moviesList;
  }
  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.moviesList.push({title:movietitle, director:moviedirector, year:movieyear});
  }
  
}
