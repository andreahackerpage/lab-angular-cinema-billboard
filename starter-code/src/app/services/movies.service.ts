import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
    constructor() { }

    Movies = [{
      id: Number,
      title: String,
      poster: String,
      synopsis: String,
      genres: ['Array'],
      year: Number,
      director: String,
      actors: ['Array'],
      hours: ['Array'],
      room: Number
    }
  ];

    getMovies(){
 return this.Movies;
    }
    getMovie(id){
    return this.Movies.filter(movie => movie.id === id);
}
}