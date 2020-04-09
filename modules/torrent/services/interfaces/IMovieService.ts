import { Movie } from "../../models/movie";
import { QUALITIES } from "../../../../utils";

export interface IMovieService {
  getMovie(keyword: string, movie_quality: QUALITIES): Promise<Movie>;
  getMovieByImdbId(id: string): Promise<Movie>;
  getMovieIn4k(movieTitle: string): Promise<Movie[]>;
}
