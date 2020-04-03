import { IMovieService } from "../services/interfaces";
import { injectable, inject } from "tsyringe";
import { CoreController } from "./coreController";

@injectable()
export class MovieController extends CoreController {
  constructor(@inject("IMovieService") private movieService: IMovieService) {
    super();
  }

  public async getMovieInTopQuality(movieTitle: string): Promise<any> {
    this.log(`getMovieInTopQuality() Movie title: ${movieTitle}`);
    return this.movieService.getMovieIn4k(movieTitle);
  }
}
