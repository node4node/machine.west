import { IMovieService } from "./interfaces";
import { ITorrentRepo } from "../repos/interfaces";
import { injectable, inject } from "tsyringe";

@injectable()
export class MovieService implements IMovieService {
  constructor(@inject("ITorrentRepo") private repo: ITorrentRepo) {}
  async getMovieByImdbId(id: string): Promise<any> {
    try {
      const movie = await this.repo.getByImdbId(id);
      return movie[0];
    } catch (e) {
      //Do some type of useful logging
      throw e;
    }
  }
  async getMovieIn4k(movieTitle: string): Promise<any[]> {
    const movies = await this.repo.findMovies(movieTitle);
    return movies;
  }
}
