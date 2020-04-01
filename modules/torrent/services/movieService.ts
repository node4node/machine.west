import { IMovieService } from "./interfaces";
import { ITorrentRepo } from "../repos/interfaces";

export class MovieService implements IMovieService {
  constructor(private repo: ITorrentRepo) {}
  async getMovieIn4k(movieTitle: string): Promise<any[]> {
    const query = `${movieTitle} 2160`;
    const movies = await this.repo.findMovies(query);
    return movies.map((x: { title: any; magnet: any }) => ({
      title: x.title,
      magnet: x.magnet,
    }));
  }
}
