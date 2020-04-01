import { IMovieService } from "../services/interfaces";
import { injectable, inject } from "tsyringe";

@injectable()
export class MovieController {
  constructor(@inject("IMovieService") private movieService: IMovieService) {
    console.log(`** [MovieController] constructor **`);
  }

  public async getMovieInTopQuality(movieTitle: string): Promise<any> {
    return this.movieService.getMovieIn4k(movieTitle);
  }
}
