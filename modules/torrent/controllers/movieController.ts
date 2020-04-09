import { IMovieService } from "../services/interfaces";
import { injectable, inject } from "tsyringe";
import { CoreController } from "./coreController";
import { MovieDTO } from "../dtos";
import { QUALITIES } from "../../../utils";

@injectable()
export class MovieController extends CoreController {
  constructor(@inject("IMovieService") private movieService: IMovieService) {
    super();
  }

  public async getMovie(
    keyword: string,
    movie_quality: QUALITIES
  ): Promise<MovieDTO> {
    this.log(`getMovie() Keyword: ${keyword} Quality: ${movie_quality}`);
    const movie = await this.movieService.getMovie(keyword, movie_quality);
    return this.send(movie);
  }
  public async getMovieInTopQuality(movieTitle: string): Promise<MovieDTO[]> {
    this.log(`getMovieInTopQuality() Movie title: ${movieTitle}`);
    const movies = await this.movieService.getMovieIn4k(movieTitle);
    return this.send(movies);
  }

  public async getMovieByImdbId(id: string): Promise<MovieDTO> {
    this.log(`getMovieByImdbId() IMDB ID: ${id}`);
    const movie = await this.movieService.getMovieByImdbId(id);
    this.log(`getMovieByImdbId() Movie: ${JSON.stringify(movie)}`);
    return this.send(movie);
  }
}
