import { Movie } from "../../models/movie";

export interface IMovieService {
  getMovieByImdbId(id: string): Promise<Movie>;
  getMovieIn4k(movieTitle: string): Promise<Movie[]>;
}
