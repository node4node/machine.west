import { IMovieService } from "./interfaces";
import { ITorrentRepo } from "../repos/interfaces";
import { injectable, inject } from "tsyringe";
import { Movie } from "../models/movie";
import { QUALITIES, failsafe } from "../../../utils";

@injectable()
export class MovieService implements IMovieService {
  constructor(@inject("ITorrentRepo") private repo: ITorrentRepo) {}
  async getMovie(keyword: string, movie_quality: QUALITIES): Promise<Movie> {
    const movies = await failsafe(
      this.repo.findMovies.bind(this.repo),
      keyword,
      100
    );
    const best: Movie = this.extractIdeal(movies, movie_quality);
    return best;
  }

  private extractIdeal(movies: Movie[], movie_quality: QUALITIES): Movie {
    let movies_of_certain_quality = movies.filter((x) =>
      x.title.match(movie_quality)
    );
    movies_of_certain_quality = movies_of_certain_quality.sort(
      (a, b) => a.size - b.size
    );
    const ideal_movie = movies_of_certain_quality[0];
    return ideal_movie;
  }
  async getMovieByImdbId(id: string): Promise<Movie> {
    try {
      const movie = (await failsafe(
        this.repo.getByImdbId.bind(this.repo),
        id
      )) as Movie[];
      return movie[0];
    } catch (e) {
      //Do some type of useful logging
      throw e;
    }
  }
  async getMovieIn4k(movieTitle: string): Promise<Movie[]> {
    const movies = await failsafe(
      this.repo.findMovies.bind(this.repo),
      movieTitle
    );
    return movies;
  }
}
