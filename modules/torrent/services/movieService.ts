import { IMovieService } from "./interfaces";
import { ITorrentRepo } from "../repos/interfaces";
import { injectable, inject } from "tsyringe";

@injectable()
export class MovieService implements IMovieService {
  constructor(@inject("ITorrentRepo") private repo: ITorrentRepo) {}
  async getMovieIn4k(movieTitle: string): Promise<any[]> {
    const movies = await this.repo.findMovies(movieTitle);
    return movies;
  }
}
