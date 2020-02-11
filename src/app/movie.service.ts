import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {}
  moviesList = [
    {id: 1, title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola'},
    {id: 2, title: 'City of God', year: '2002', director: 'Fernando Meirelles'},
    {id: 3, title: 'The Lord of the Rings: The Return of the King', year: '2003', director: 'Peter Jackson'},
  ];

  getMovies() {
    return this.moviesList;
  }
  
}
