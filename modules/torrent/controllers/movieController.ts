import { IMovieService } from "../services/interfaces";

export class MovieController {
  constructor(private movieService: IMovieService) {
    console.log(`** [MovieController] constructor **`);
  }

  public async getMovieInTopQuality(movieTitle: string): Promise<any> {
    return this.movieService.getMovieIn4k(movieTitle);
  }
}
