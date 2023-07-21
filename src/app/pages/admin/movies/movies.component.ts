import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private http: HttpClient) {
    this.fetchAllMovies();
    console.log(this.movies);
  }

  ngOnInit(): void {}

  private fetchAllMovies() {
    this.http
      .get<Movie[]>('https://mba-3izp.onrender.com/mba/api/v1/movies')
      .subscribe((movies) => {
        this.movies = movies;
        console.log(this.movies);
      });
  }

onNewMovie(){
  
}


}
