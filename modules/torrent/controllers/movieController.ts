import { IMovieService } from "../services/interfaces";
import { injectable, inject } from "tsyringe";
import { CoreController } from "./coreController";
import { MovieDTO } from "../dtos";

@injectable()
export class MovieController extends CoreController {
  constructor(@inject("IMovieService") private movieService: IMovieService) {
    super();
  }

  public async getMovieInTopQuality(movieTitle: string): Promise<any> {
    this.log(`getMovieInTopQuality() Movie title: ${movieTitle}`);
    return this.movieService.getMovieIn4k(movieTitle);
  }

  public async getMovieByImdbId(id: string): Promise<MovieDTO> {
    this.log(`getMovieByImdbId() IMDB ID: ${id}`);
    let movie = await this.movieService.getMovieByImdbId(id);
    movie = {
      category: movie.category,
      downloadLink: movie.download,
      imdb_id: movie.episode_info?.imdb,
      moviedb_id: movie.episode_info?.themoviedb,
      size: movie.size,
      title: movie.title,
    };
    this.log(`getMovieByImdbId() Movie: ${JSON.stringify(movie)}`);
    return movie;
  }
}
